import{i as u,S as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const f="44018345-85ec7856faf02135ba80b8e93",m="https://pixabay.com/api/";function p(e){const t=new URLSearchParams({key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${m}?${t}`;return fetch(n).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>s.hits)}document.querySelector(".gallery");function i(e){u.error({title:"Error",message:e,position:"topRight"})}function h(){const e=document.createElement("div");e.className="loading-indicator",e.innerHTML='<div class="loader">Loading...</div>',document.body.appendChild(e)}function c(){const e=document.querySelector(".loading-indicator");e&&document.body.removeChild(e)}function y(e){return e.map(t=>`
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
  `).join("")}const g=new d(".gallery a",{captionsData:"alt",captionsDelay:250}),b=document.querySelector("#search-form"),L=document.querySelector('input[name="searchQuery"]'),l=document.querySelector(".gallery");b.addEventListener("submit",e=>{e.preventDefault();const t=L.value.trim();if(t===""){i("Please enter a search query.");return}l.innerHTML="",h(),p(t).then(n=>{if(c(),n.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}l.innerHTML=y(n),g.refresh()}).catch(n=>{c(),i("Something went wrong. Please try again later.")}),e.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
