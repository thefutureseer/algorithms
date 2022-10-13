//from link: https://javascript.plainenglish.io/the-javascript-map-type-ec7d3e1cff5d

window.onload = function()
{
    useObjectAsMap();

    // useMap();
}

function useObjectAsMap()
{
    const jaguars = {};

    jaguars.XK120 = 1948;
    jaguars.XK140 = 1954;
    jaguars.XK150 = 1957;

    const keys = Object.keys(jaguars);

    writeToConsole(`size: ${keys.length}<br/><br/>`, "console");

    for(key of keys)
    {
        writeToConsole(`Model: ${key} Year:${jaguars[key]}<br/>`, "console");
    }
}



//////////////////////////////////////


function useMap()
{
    const jaguars = new Map();

    jaguars.set("XK120", 1948);
    jaguars.set("XK140", 1954);
    jaguars.set("XK150", 1957);

    writeToConsole(`size: ${jaguars.size}<br/><br/>`, "console");

    writeToConsole(`has XK140? ${jaguars.has("XK140")}<br/>`, "console");
    writeToConsole(`has E-Type? ${jaguars.has("E-Type")}<br/><br/>`, "console");

    for(let jaguar of jaguars.entries())
    {
        writeToConsole(`${jaguar}<br/>`, "console");
    }

    writeToConsole("<br/>", "console");

    for(let key of jaguars.keys())
    {
        writeToConsole(`${key}: ${jaguars.get(key)}<br/>`, "console");
    }

    writeToConsole("<br/>", "console");

    for(let value of jaguars.values())
    {
        writeToConsole(`${value}<br/>`, "console");
    }

    writeToConsole("<br/>", "console");

    jaguars.delete("XK120");
    writeToConsole(`size: ${jaguars.size}<br/><br/>`, "console");

    jaguars.clear();
    writeToConsole(`size: ${jaguars.size}<br/>`, "console");
}