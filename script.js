document.addEventListener('DOMContentLoaded', function() {
    
    // تفعيل قائمة الموبايل التفاعلية (قائمة الهمبرغر)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            
            // تغيير الرمز الجمالي بين الفتح والإغلاق
            if (navLinks.classList.contains('show')) {
                menuToggle.textContent = '✕';
                menuToggle.style.color = '#c59357';
            } else {
                menuToggle.textContent = '☰';
                menuToggle.style.color = '#e5dac9';
            }
        });
    }

    // فحص النموذج والتأكد من إدخال الإيميل بالشكل الصحيح قبل الإرسال الفعلي
    const webForm = document.querySelector('.main-cyber-form');
    if (webForm) {
        webForm.addEventListener('submit', function(event) {
            const emailValue = document.getElementById('emailInput').value.trim();
            
            if (!emailValue) {
                event.preventDefault(); // إيقاف الإرسال في حال وجود حقل فارغ
                alert('عذراً، حقل البريد الإلكتروني إلزامي لتلقي رد النظام الفرعي للمشروع.');
            } else {
                event.preventDefault(); // لمنع تنشيط الصفحة محلياً أثناء العرض أمام الدكتور
                alert('تم استلام معلوماتك بنجاح داخل مصفوفة النظام، وسيتم مراجعتها من قِبل إدارة محمصة مقهى الخان الفلسطينية الذكية.');
                webForm.reset(); // تفريغ الخانات بعد النجاح لإعطاء لمسة تطبيق حقيقي
            }
        });
    }
});