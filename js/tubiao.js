        // 从 JSON 文件加载数据
        fetch('https://test-1252505664.cos-website.ap-nanjing.myqcloud.com/json/note.json')
            .then(response => response.json())
            .then(data => {
                const dockBar = document.getElementById('dock-bar');
                
                data.forEach(item => {
                    const dockOne = document.createElement('div');
                    dockOne.className = 'dock-one';
                    dockOne.onclick = () => openLink(item.name, item.url, item.img);

                    const img = document.createElement('img');
                    img.src = item.img;
                    img.alt = item.name;

                    const span = document.createElement('span');
                    span.textContent = item.name;

                    dockOne.appendChild(img);
                    dockOne.appendChild(span);
                    dockBar.appendChild(dockOne);
                });
            })
            .catch(error => console.error('Error loading JSON:', error));

        function openLink(name, url, img) {
            const jsonData = {
                name: name,
                url: url,
                img: img
            };

            // 打开新窗口
            window.open(url, '_blank');

            // 这里可以进一步处理 jsonData，比如在控制台输出
            console.log(JSON.stringify(jsonData));
        }