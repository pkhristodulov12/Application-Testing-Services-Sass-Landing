const items = document.querySelectorAll(".testing-process__item");

const observer = new IntersectionObserver(entries => {

    entries.forEach((entry,index) => {

        if(entry.isIntersecting){

            setTimeout(()=>{
                entry.target.classList.add("visible");
            }, index * 200);

        }

    });

});

items.forEach(item => observer.observe(item));