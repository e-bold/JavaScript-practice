function whosPaying(names) {
        let random = Math.floor(Math.random() * names.length);
        
        return(names[random] + " is going to buy lunch today!");
    }

    console.log(whosPaying(["erika", "bobby", "brian", "josh", "carmela", "vinny"]));

