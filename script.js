document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDevault();

        document.querySelector(this.getAttribute('href')).scrollintroView({
            behavior: 'smooth'
        })
    }) 
    }
)