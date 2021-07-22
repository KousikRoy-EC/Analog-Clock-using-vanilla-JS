setInterval(() => {
                      curr_Date =  new Date();
                      hour_time =  curr_Date.getHours();
                      min_time  =  curr_Date.getMinutes();
                      sec_time  =  curr_Date.getSeconds();

               hours_rotation   = ((30*hour_time) + (min_time/2));
               minutes_rotation = 6*min_time;
               seconds_rotation = 6*sec_time; 

          hours.style.transform = `rotate(${hours_rotation}deg)`;
        minutes.style.transform = `rotate(${minutes_rotation}deg)`;
        seconds.style.transform = `rotate( ${seconds_rotation}deg)`;  

}, 
1000);