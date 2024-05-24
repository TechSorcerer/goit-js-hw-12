import{a as b,i as m,S as w}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const L="44018345-85ec7856faf02135ba80b8e93",v="https://pixabay.com/api/";async function f(e,t){try{const s={key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},n=await b.get(v,{params:s});if(n.status!==200)throw new Error("Network response was not ok");return n.data}catch{throw new Error("Failed to fetch images")}}const p=document.querySelector(".js-load-more-btn");document.querySelector(".gallery");function d(e){m.error({title:"Error",message:e,position:"topRight"})}function q(){m.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function h(){const e=document.createElement("div");e.className="loading-indicator",e.innerHTML='<div class="loader">Loading...</div>',document.body.appendChild(e)}function S(){const e=document.querySelector(".loading-indicator");e&&document.body.removeChild(e)}function E(e){return e.map(t=>`
    <li class="card-item">
      <a href="${t.largeImageURL}" class="photo-card">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span class="numbers">${t.likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span class="numbers">${t.views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span class="numbers">${t.comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span class="numbers">${t.downloads}</span>
          </p>
        </div>
      </a>
    </li>
  `).join("")}function g(){p.classList.remove("is-hidden")}function i(){p.classList.add("is-hidden")}const I=new w(".gallery a",{captionsData:"alt",captionsDelay:250}),M=document.querySelector("#search-form"),u=document.querySelector('input[name="searchQuery"]'),a=document.querySelector(".gallery"),B=document.querySelector(".js-load-more-btn");let c=1;M.addEventListener("submit",e=>{e.preventDefault(),c=1,a.innerHTML="",h(),i();const t=u.value.trim();if(t===""){d("Please enter a search query.");return}y(t)});B.addEventListener("click",()=>{c++;const e=u.value.trim();h(),y(e),P(e)});async function y(e){try{const t=await f(e,c),s=t.totalHits;if(t.length===0)i(),d("Sorry, there are no images matching your search query. Please try again!");else{a.innerHTML+=E(t.hits),I.refresh(),g();const n=a.children[0].getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"}),a.children.length>=s&&(i(),q())}}catch{d("Something went wrong. Please try again later.")}finally{S()}u.value=""}async function P(e){(await f(e,c)).length===0?i():g()}
//# sourceMappingURL=commonHelpers.js.map
