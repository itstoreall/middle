import PDFIcon from '../../assets/icons/PDFIcon';
import s from './DownloadPDF.module.scss';

const DownloadPDF = ({ url }: { url: string }) => {
  const urlParts = url.split('/');
  const title = urlParts[urlParts.length - 1].replace('.pdf', '');

  const download = () => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title}_${Date.now()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(e => console.error('ERROR in DownloadPDF:', e));
  };

  return (
    <button className={s.downloadButton} onClick={download}>
      <PDFIcon />
    </button>
  );
};

export default DownloadPDF;
