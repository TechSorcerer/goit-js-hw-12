import{a as y,i as p,S as b}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const L="44018345-85ec7856faf02135ba80b8e93",w="https://pixabay.com/api/";async function v(t,e){try{const n={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await y.get(w,{params:n})).data}catch{throw new Error("Failed to fetch images")}}const f=document.querySelector(".js-load-more-btn");document.querySelector(".gallery");function d(t){p.error({title:"Error",message:t,position:"topRight"})}function S(){p.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function h(){const t=document.createElement("div");t.className="loading-indicator",t.innerHTML='<div class="loader">Loading...</div>',document.body.appendChild(t)}function q(){const t=document.querySelector(".loading-indicator");t&&document.body.removeChild(t)}function I(t){return t.map(e=>`
    <li class="card-item">
      <a href="${e.largeImageURL}" class="photo-card">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span class="numbers">${e.likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span class="numbers">${e.views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span class="numbers">${e.comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span class="numbers">${e.downloads}</span>
          </p>
        </div>
      </a>
    </li>
  `).join("")}function E(){f.classList.remove("is-hidden")}function a(){f.classList.add("is-hidden")}const M=new b(".gallery a",{captionsData:"alt",captionsDelay:250}),P=document.querySelector("#search-form"),u=document.querySelector('input[name="searchQuery"]'),i=document.querySelector(".gallery"),$=document.querySelector(".js-load-more-btn");let m=1,c="";P.addEventListener("submit",t=>{if(t.preventDefault(),m=1,i.innerHTML="",h(),a(),c=u.value.trim(),c===""){d("Please enter a search query.");return}g(c)});$.addEventListener("click",()=>{m++,u.value.trim(),h(),g(c)});async function g(t){try{const e=await v(t,m),n=e.totalHits;if(e.length===0)a(),d("Sorry, there are no images matching your search query. Please try again!");else{i.innerHTML+=I(e.hits),M.refresh(),E();const s=i.children[0].getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),i.children.length>=n&&(a(),S())}}catch{d("Something went wrong. Please try again later."),a()}finally{q()}u.value=""}
//# sourceMappingURL=commonHelpers.js.map
