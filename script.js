// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('a');

    link.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认跳转
        alert('正在连接王菲特的私人交易终端... \n\n[提示]：价值投资是时间的玫瑰。');
    });
});