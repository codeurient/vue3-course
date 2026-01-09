export default {

    // Bu direktivi yaradiriq ki, CREATE POST deyerek modal pencereni acdigimiz zaman, avtomatik olara INPUT sahesinde fokuslanaq. Yəni secili olsun.
    mounted(el) {
        el.focus();
    },

    name: 'focus'
}