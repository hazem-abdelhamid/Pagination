const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      // avatar_url,login,html_url
      const { avatar_url: img, html_url: user, login: name } = person;
      return `<article class="card">
    <img src="${img}" alt="${name}"/>
    <h4>${name}</h4>
    <a href="${user}" class="btn">view profile</a>
    </article>`;
    })
    .join(" ");
  container.innerHTML = newFollowers;
};

export default display;
