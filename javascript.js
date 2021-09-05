const btnRepos = document.getElementById("btnRepos")
    const divResult = document.getElementById("divResult")
    btnRepos.addEventListener("click", getRepos)

    async function getRepos() {
        clear();
        const url = "https://api.github.com/search/repositories?q=stars:0..300000"
        const response = await fetch(url)
        const result = await response.json()

        result.items.forEach(i=>{

            const anchor = document.createElement("a")
            anchor.href = i.html_url;
            anchor.textContent = i.full_name;
            divResult.appendChild(anchor)
            divResult.appendChild(document.createElement("br"))
        })

    }
    function clear(){
        while(divResult.firstChild) 
            divResult.removeChild(divResult.firstChild)
    }