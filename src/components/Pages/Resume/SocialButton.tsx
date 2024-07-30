const handleDevice = (url: any) => {
  const mobileUrl = url.mob;
  const desktopUrl = url.desk;

  window.open(mobileUrl, '_blank');
  setTimeout(() => window.open(desktopUrl, '_blank'), 500);
};

const SocialButton = ({ el, s }: { el: any; s: any }) => (
  <button
    className={`${s.socialButton} ${s[el.label]}`}
    onClick={() => handleDevice(el.url)}
    title={el.label}
  >
    {el.icon}
  </button>
);

export default SocialButton;

/*
window.location.href = mobileUrl;
setTimeout(() => (window.location.href = desktopUrl), 500);
*/
