const drawer = document.querySelector('.drawer');

let griddimension = 16
for (let i=0; i < griddimension; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    drawer.appendChild(row);
    for (let i=0; i < griddimension; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        row.appendChild(grid);  
    };

};

const pixels = document.querySelectorAll('.grid');
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {  
        pixel.classList.add('pixelon');                                
    });
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        pixel.classList.remove('pixelon');   
    });
    
});


pixel.addEventListener('mousedown' && 'mouseover', () => {  
    pixel.classList.remove('pixelon');                                
});       

function getInputValue() {
    griddimension = document.getElementById("resolution").value;
    
    if (griddimension > 100) {
        document.querySelector('.hints').textContent = "Value must be less than 100."
    } else if (griddimension < 8) {
        document.querySelector('.hints').textContent = "Minimum grid is 8."
    } else if (griddimension >= 8 && griddimension <= 100) {

        const gridremoval = document.querySelectorAll('.grid');
        gridremoval.forEach((gridremove) => {
            gridremove.remove();
            });

        const rowremoval = document.querySelectorAll('.row');
        rowremoval.forEach((rowremove) => {
            rowremove.remove();
            });


        for (let i=0; i < griddimension; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            drawer.appendChild(row);
            for (let i=0; i < griddimension; i++) {
                const grid = document.createElement('div');
                grid.classList.add('grid');
                row.appendChild(grid);  
            };

        };

        const pixels = document.querySelectorAll('.grid');
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {  
                pixel.classList.add('pixelon');                                
            });
        });
        
        const reset = document.querySelector('.reset');
        reset.addEventListener('click', () => {
            pixels.forEach((pixel) => {
                pixel.classList.remove('pixelon');   
            });
            
        });
        
        
        pixel.addEventListener('mousedown' && 'mouseover', () => {  
            pixel.classList.remove('pixelon');                                
        });       
    
    };
    
};


