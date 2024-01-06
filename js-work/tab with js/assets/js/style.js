
function opentab(tabId) {
    mycontent = document.querySelectorAll(".tab-content")
    mycontent.forEach(Mycontent => {
        Mycontent.classList.add("d_none")
        Mycontent.classList.remove("d_block")

    });
    const opentab = document.getElementById(tabId);
    opentab.classList.add("d_block")
    opentab.classList.remove("d_none")
    
};
opentab('tab1') 
