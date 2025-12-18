// 信息提交
window.onload = function() {
    console.log("宠物网站加载完成");
    
    // 找到"完成注册"按钮
    const submitButton = document.querySelector('.but');
    
    if (submitButton) {
        console.log("成功找到注册按钮");
        
        submitButton.onclick = function() {
            console.log("用户点击了注册按钮");
            
            // 获取表单数据
            const nickname = document.getElementById('nickname').value;
            const phone = document.getElementById('phone').value;
            const petType = document.querySelector('select').value;
            
            // 检查性别是否选择
            let genderText = '';
            const maleRadio = document.getElementById('boy');
            const femaleRadio = document.getElementById('girl');
            
            if (maleRadio.checked) {
                genderText = '男';
            } else if (femaleRadio.checked) {
                genderText = '女';
            }
            
            // 获取年龄
            const ageSelect = document.querySelectorAll('select')[1];
            const petAge = ageSelect ? ageSelect.value : '';
            
            // 简单验证
            if (!nickname || nickname.trim() === '') {
                alert('请填写昵称！');
                return;
            }
            
            if (!phone || phone.trim() === '' || phone.length !== 11) {
                alert('请输入11位手机号！');
                return;
            }
            
            if (petType === '-请选择-') {
                alert('请选择宠物种类！');
                return;
            }
            
            if (!genderText) {
                alert('请选择宠物性别！');
                return;
            }
            
            if (petAge === '-请选择-') {
                alert('请选择宠物年龄！');
                return;
            }
            
            // 显示成功信息
            alert('✅ 注册成功！\n\n' +
                  '📝 会员信息：\n' +
                  '昵称：' + nickname + '\n' +
                  '手机：' + phone + '\n\n' +
                  '🐾 宠物信息：\n' +
                  '种类：' + petType + '\n' +
                  '性别：' + genderText + '\n' +
                  '年龄：' + petAge + '\n\n' +
                  '感谢您的注册！');
        };
    } else {
        console.error("错误：找不到注册按钮");
        alert("网站功能异常，请刷新页面重试");
    }
     // 功能2: 点赞功能 - 这里调用！
    setupLikeFunction();
};


function setupLikeFunction() {
    const likeBtns = document.querySelectorAll('.like-btn');
    
    likeBtns.forEach((btn, index) => {
        // 确保每个按钮有唯一ID
        if (!btn.hasAttribute('data-id')) {
            btn.setAttribute('data-id', 'img' + (index + 1));
        }
        
        btn.onclick = function() {
            const countSpan = this.querySelector('.count');
            let currentCount = parseInt(countSpan.textContent) || 0;
            currentCount++;
            countSpan.textContent = currentCount;
            
            // 视觉反馈
            // this.style.background = '#ff4444';
            this.style.color = 'black';
            setTimeout(() => {
                this.style.background = '';
                this.style.color = '';
            }, 300);
        };
    });
}

document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        const keyword = this.value.trim().toLowerCase();
        
        // 跳转到汪汪照片墙
        if(keyword.includes('照片') || keyword.includes('汪汪') || keyword.includes('宠物') || keyword.includes('点赞')) {
            document.querySelector('.pet-show').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
        // 跳转到会员注册
        } else if(keyword.includes('注册') || keyword.includes('会员')) {
            document.querySelector('#register').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
        } else if(keyword) {
            // 其他关键词提示
            alert(`搜索关键词: ${keyword}\n提示：可以搜索"照片墙"查看宠物照片，或搜索"会员注册"进行登记`);
        }
        
        this.value = '';
    }
});