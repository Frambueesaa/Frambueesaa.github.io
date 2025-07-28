function startCountdown(targetDate, ids) {
  const target = new Date(targetDate);

  function update() {
    const now = new Date();
    const diff = target - now;

    if(ids.counter){
      const counterElement = document.getElementById(ids.counter);
      if(!counterElement) return;
    }

    if (diff <= 0) {
      if (ids.days) document.getElementById(ids.days).textContent = "0d";
      if (ids.hours) document.getElementById(ids.hours).textContent = "0h";
      if (ids.minutes) document.getElementById(ids.minutes).textContent = "0m";
      if (ids.seconds) document.getElementById(ids.seconds).textContent = "0s";
      if (ids.info) document.getElementById(ids.info).style.visibility = 'hidden';
      if (ids.finish) document.getElementById(ids.finish).style.visibility = 'visible';
      clearInterval(interval);
      return;
    }
    else
    {
      if (ids.info) document.getElementById(ids.info).style.visibility = 'visible';
      if (ids.finish) document.getElementById(ids.finish).style.visibility = 'hidden';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (ids.days) document.getElementById(ids.days).textContent = `${days}d`;
    if (ids.hours) document.getElementById(ids.hours).textContent = `${hours}h`;
    if (ids.minutes) document.getElementById(ids.minutes).textContent = `${minutes}m`;
    if (ids.seconds) document.getElementById(ids.seconds).textContent = `${seconds}s`;
  }

  const interval = setInterval(update, 1000);
  update();
}
