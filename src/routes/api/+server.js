import { json } from "@sveltejs/kit";

export async function GET(){
  let res = await fetch("https://api.github.com/users/Brajo280603/repos?per_page=100");
  let json = await res.json();
  let data = [];
  json.forEach(el=>{

    if(!el.private && !el.fork){
      let tempObj = {
        name:el.name,
        link:el.html_url,
        made:el.language,
        icon:el.owner.avatar_url,
        desc:el.description
      }

      data.push(tempObj)
    }
    
  })
  return data;
}

