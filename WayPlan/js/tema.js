$(function () {
    if (localStorage.getItem("theme") == "dark") {
        setThemeDark();
        $("#chk").prop("checked", true);
    } else {
        setThemeLight();
    }
    function setThemeDark() {
        document.documentElement.style.setProperty("--main-color", "#232220");
        document.documentElement.style.setProperty("--secondary-color", "#2e2d2b");
        document.documentElement.style.setProperty("--font-color", "#ffffff");
        document.documentElement.style.setProperty("--active-color", "#232220");
        document.documentElement.style.setProperty("--icon-color", "#821d6b");
    }
    function setThemeLight() {
        document.documentElement.style.setProperty("--main-color", "#f2f2f2");
        document.documentElement.style.setProperty("--secondary-color", "#e3e1e1");
        document.documentElement.style.setProperty("--font-color", "#2b2b2b");
        document.documentElement.style.setProperty("--active-color", "#cfcdcd");
        document.documentElement.style.setProperty("--icon-color", "#571e84");
    }
    $("#chk").change(function (event) {
        var check = event.target;
        if (check.checked) {
            setThemeDark()
            localStorage.setItem("theme", "dark")
        }
        else {
            setThemeLight()
            localStorage.setItem("theme", "light")
        }
    })
})

$('#icon').click(function () {
    if (document.getElementById('bar').style.height == '100%') {
        $('#bar').css({ 'height': '0' })
        $('body').css({ 'overflow': 'auto' })
    }
    else {
        $('#bar').css({ 'height': '100%' })
        $('body').css({ 'overflow': 'hidden' })
        window.scrollTo(0, 0)
    }
})