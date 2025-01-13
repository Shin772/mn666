// 处理下载按钮点击事件
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.href;
        const code = this.dataset.code;
        window.location.href = url;
    });
}); 