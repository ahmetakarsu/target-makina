var mediaQuery = window.matchMedia('(min-width: 992px)');
        
        
        function wrapTables() {
         
          var tables = document.querySelectorAll('table');
        
          
          tables.forEach(function(table) {
           
            if (!table.parentNode.classList.contains('table-wrapper')) {
              
              var divWrapper = document.createElement('div');
        
             
              table.parentNode.insertBefore(divWrapper, table);
        
              
              divWrapper.appendChild(table);
        
              
              divWrapper.classList.add('table-wrapper');
             
            }
          });
        }
        
        
        function unwrapTables() {
         
          var wrappers = document.querySelectorAll('.table-wrapper');
        
          
          wrappers.forEach(function(wrapper) {
           
            var table = wrapper.querySelector('table');
        
           
            wrapper.parentNode.insertBefore(table, wrapper);
        
           
            wrapper.parentNode.removeChild(wrapper);
          });
        }
        
        
        mediaQuery.addListener(function(event) {
          if (event.matches) {
           
            unwrapTables();
          } else {
           
                 wrapTables();
          }
        });
        
        
        if (mediaQuery.matches) {
         unwrapTables();
        } else {
         wrapTables();  
        }

