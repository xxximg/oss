define(["Construct/DublinCore"], function(DublinCore) {
    // 压缩成 zip 的工具: JSZIP
    var EpubBuilder = function() {
        this.init();
        this.dublinCore = new DublinCore();
    };

    $.extend(EpubBuilder.prototype, {
        "init": function() {
            var _this = this;
            $.ajax({ async: false, type: "get", dataType: "text", url: "./epub/mimetype", success: function(data) {
                _this.mimetype = data;
            }});
            $.ajax({ async: false, type: "get", dataType: "text", url: "./epub/META-INF/container.xml", success: function(data) {
                _this.container = data;
            }});
            $.ajax({ async: false, type: "get", dataType: "text", url: "./epub/OEBPS/toc.ncx", success: function(data) {
                _this.toc = data;
            }});
            $.ajax({ async: false, type: "get", dataType: "text", url: "./epub/OEBPS/content.opf", success: function(data) {
                _this.contentOpt = data;
            }});
            $.ajax({ async: false, type: "get", dataType: "text", url: "./epub/OEBPS/coverpage.html", success: function(data) {
                _this.coverpage = data;
            }});
            $.ajax({ async: false, type: "get", dataType: "text", url: "./epub/OEBPS/page.html", success: function(data) {
                _this.page = data;
            }});
        },

        /**
         * @desc 转化为相对地址
         */
        toRelativeUrl: function(url) {
            if (url) {
                url = url.replace(/\/[^\/]+\/\.\./g, "");
                url = url.replace(/\/+/g, "/");
                url = url.replace(/^\/([^\/])/, "$1");
            }
            return url || "";
        },

        /**
         * @desc 获取图片类型
         */
        getImageType: function(fileurl) {
            if (!fileurl) return;
            return fileurl.split(".").pop() || "";
        },

        /**
         * @desc 导入 epub 文件
         */
        importEpub: function(setData) {
            var _this = this;
            var $input = $("<input type='file' >");
            $input.bind("change", function(ev) {
                util.readArrayBuffer(ev.target.files[0]).done(function(arrayBuffer) {
                    var unzip = JSZip(arrayBuffer);
                    _this.readEpub(unzip, setData);
                });
            });
            $input.trigger("click");
        },

        /**
         * @desc 读取 epub 文件并展示
         */
        readEpub: function(unzip, setData) {
            var _this = this;
            var containerXml = unzip.file("META-INF/container.xml").asText();
            var domParser = new DOMParser;
            var xmlDoc = domParser.parseFromString(containerXml, 'text/xml');
            var fullPath = xmlDoc.getElementsByTagName("rootfile")[0].getAttribute("full-path");
            var OEBPSFolderName = fullPath.split("/")[0] === "content.opf" ? "" : fullPath.split("/")[0];

            var contentOpt = unzip.file(fullPath).asText();
            var tocName = fullPath.match(/\/?(\w+?)\.opf/)[1] || "";
            var tocNcx = "";
            try {
                tocNcx = unzip.file(_this.toRelativeUrl(OEBPSFolderName + "/" + tocName + ".ncx")).asText();
            } catch (e) {
                tocNcx = unzip.file(_this.toRelativeUrl(OEBPSFolderName + "/toc.ncx")).asText();
            }

            var $tocNcx = $(tocNcx);
            var contentOptXmlDoc = domParser.parseFromString(contentOpt, 'text/xml');
            var elSpine = contentOptXmlDoc.getElementsByTagName("spine")[0];

            var getTocEl = function(href) {
                var els = $tocNcx.find("content");
                for (var i = 0; i < els.length; i++) {
                    if (els[i].getAttribute("src").indexOf(href) === 0) {
                        return els[i];
                    }
                }
            };

            this.dublinCore.setDublinCore(contentOptXmlDoc);

            var navArray = [];
            var contentArray = [];
            var def = $.Deferred();
            var orginDef = def;

            $.each($(elSpine).children(), function(contentOpfSpinIndex, itemref) {
                var idref = itemref.getAttribute("idref");
                var href = contentOptXmlDoc.getElementById(idref).getAttribute("href");
                var dir = href.split("/");
                dir.pop();
                var nav = getTocEl(href);
                var navText = "";
                var content = "";

                navText = $(nav).prev("navlabel").text();
                if (!nav && contentOpfSpinIndex === 0) navText = "封面";

                content = unzip.file(_this.toRelativeUrl(OEBPSFolderName + "/" + href)).asText();
                var domParser = new DOMParser();
                var $content = $(domParser.parseFromString(content, 'text/html'));
                if ($content.find("body").size()) { $content = $content.find("body"); }
                var imgs = $content.find("image").add($content.find("img"));

                $.each(imgs, function(i, img) {
                    def = def.then(function() {
                        var _def = $.Deferred();
                        var href = $(img).attr("xlink:href");
                        var src = $(img).attr("src");
                        var url = OEBPSFolderName + "/" + dir.join("/") + "/" + (href || src);
                        var jpg = unzip.file(_this.toRelativeUrl(url));
                        var imageType = _this.getImageType(url);

                        try {
                            var oFReader = new FileReader();
                            oFReader.onload = function(oFREvent) {
                                $(img).attr("src", oFREvent.target.result);
                                if ($(img).closest("svg").size()) {
                                    $(img).attr("xlink:href", oFREvent.target.result);
                                    $(img).attr("src", "");
                                }
                                _def.resolve();
                            };
                            oFReader.readAsDataURL(new Blob([jpg.asArrayBuffer()], { type: 'image/' + imageType }));
                        } catch (e) {
                            _def.resolve();
                        }
                        return _def;
                    });
                });

                def.then(function() {
                    var $divContent = $("<div>").append($content);
                    navArray[contentOpfSpinIndex] = navText;
                    contentArray[contentOpfSpinIndex] = $divContent.html();
                });
            });

            def = def.then(function() {
                var _def = $.Deferred();
                try {
                    var url = $(contentOptXmlDoc).find("item[id*=" + $(contentOptXmlDoc).find("meta[name*=cover]").attr("content").split(".")[0] + "]").attr("href");
                    var imageType = _this.getImageType(url);
                    var jpg = unzip.file(_this.toRelativeUrl(OEBPSFolderName + "/" + url));
                    var oFReader = new FileReader();
                    oFReader.onload = function(oFREvent) {
                        _this.dublinCore.setCover(oFREvent.target.result);
                        _def.resolve();
                    };
                    oFReader.readAsDataURL(new Blob([jpg.asArrayBuffer()], { type: 'image/' + imageType }));
                    return _def;
                } catch (e) {
                    _this.dublinCore.setCover("");
                    console.log("封面图片加载失败");
                    _def.resolve();
                }
            });

            def.then(function() {
                setData(navArray, contentArray);
            });
            orginDef.resolve();
        },

        /**
         * @desc 把 base64 的图片转文件流
         * @param {String} mode - "epub" 导出 / "web" 预览
         */
        base64toImage: function(content, zipImageFolder, mode) {
            var $html = $(content);
            var wrap = $("<div>").append($html);

            wrap.find("image").add(wrap.find("img")).each(function(i, e) {
                var href = $(e).attr("xlink:href") || $(e).attr("src");
                var dataUrl = href.split(",").pop();

                var imageType = href.match(/data:image\/([\w\W]+);/i);
                imageType = imageType && imageType.pop() || "";

                if (imageType) {
                    var uuid = util.uuid() + "." + imageType;
                    zipImageFolder.file(uuid, dataUrl, { base64: true });

                    if (mode === "epub") {
                        $(e).attr("src", "../images/" + uuid);
                        if ($(e).closest("svg").size()) {
                            $(e).attr("xlink:href", "../images/" + uuid);
                            $(e).attr("src", "");
                        }
                    } else {
                        $(e).attr("src", href);
                        if ($(e).closest("svg").size()) {
                            $(e).attr("xlink:href", href);
                        }
                    }

                    $(e).attr("_src", "");
                }
            });

            return wrap.html();
        },

        /**
         * @desc 导出 EPUB
         */
        exportToEpub: function(options) {
            options = $.extend({
                tocArray: ["章节0", "章节1"],
                contentArray: ["测试数组1", "测试数据2"],
                fileName: "default",
                coverpage: "coverpage",
                publisher: "publisher",
                description: "description",
                language: "language",
                creator: "creator",
                author: "author",
                title: "title",
                contributor: "contributor",
                ISBN: "xxxx-xxxx",
                coverImage: "",
                mode: "epub" // 默认导出 EPUB
            }, options);

            var zip = new JSZip();
            var OPSFolder = zip.folder("OEBPS");
            var imagesFolder = OPSFolder.folder("images");
            var textFolder = OPSFolder.folder("Text");

            var chapterLength = options.contentArray.length;
            var tocItem = [];

            try {
                for (var i = 0; i < chapterLength; i++) {
                    tocItem.push({
                        name: options.tocArray[i],
                        href: "chapter" + i + ".html",
                        isCoverPage: $.trim(options.tocArray[i]) === "封面"
                    });

                    options.contentArray[i] = this.base64toImage(options.contentArray[i], imagesFolder, options.mode);
                    options.contentArray[i] = options.contentArray[i].replace(/<img [^>]+[^\/]>(?=<\/img>)?/gi, function($0) {
                        return $0.replace(/>$/, "/>" );
                    });

                    textFolder.file("chapter" + i + ".html", Handlebars.compile(this.page)({ body: options.contentArray[i] }));
                }
            } catch (e) {
                console.log(e);
            }

            var MeTaFolder = zip.folder("META-INF");
            MeTaFolder.file("container.xml", this.container);
            zip.file("mimetype", this.mimetype);

            try {
                if (options.coverImage.length) {
                    var imgSrc = this.base64toImage($("<img>").attr("src", options.coverImage), imagesFolder, options.mode);
                    options.coverImage = imgSrc.match(/src=\"\.\.([^\"]*)\"/)[1];
                }
            } catch (e) {
                options.coverImage = "";
            }

            OPSFolder.file("content.opf", Handlebars.compile(this.contentOpt)({ tocItem: tocItem, options: options }));
            OPSFolder.file("toc.ncx", Handlebars.compile(this.toc)(tocItem));

            var content = zip.generate({ type: "blob" });
            saveAs(content, options.fileName + '.epub');

            return;
        }
    });

    return EpubBuilder;
});
