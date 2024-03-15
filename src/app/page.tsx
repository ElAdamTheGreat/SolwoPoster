'use client'
import React, { useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

export default function Page() {
  const posterRef = useRef(null);
  const exportToPdf = useCallback(() => {
    if (posterRef.current !== null) {
      const printDPI = 300;
      const scale = printDPI / 96;
      html2canvas(posterRef.current, { scale: scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        
        // A3 size is 297mm x 420mm.
        const pdf = new jsPDF('p', 'mm', 'a3');
        pdf.addImage(imgData, 'PNG', 0, 0, 297, 420);
        pdf.save("SolwoPlakát.pdf");
      });
    }
  }, []);

  const exportToJpg = useCallback(() => {
    if (posterRef.current !== null) {
      const printDPI = 300;
      const scale = printDPI / 96;
      html2canvas(posterRef.current, { scale: scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg').replace("image/jpeg", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'SolwoPlakát.jpg';
        link.href = imgData;
        link.click();
      });
    }
  }, []);

  const exportToPng = useCallback(() => {
    if (posterRef.current !== null) {
      const printDPI = 300;
      const scale = printDPI / 96;
      html2canvas(posterRef.current, { scale: scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'SolwoPlakát.png';
        link.href = imgData;
        link.click();
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 pb-10">
      <Poster ref={posterRef} />
      <div className="flex gap-10">
        <button onClick={exportToPdf} className="text-3xl rounded-2xl bg-green-700 hover:bg-green-800 ease-out duration-300 text-white py-3 px-6">Export to PDF</button>
        <button onClick={exportToJpg} className="text-3xl rounded-2xl bg-green-700 hover:bg-green-800 ease-out duration-300 text-white py-3 px-6">Export to JPG</button>
        <button onClick={exportToPng} className="text-3xl rounded-2xl bg-green-700 hover:bg-green-800 ease-out duration-300 text-white py-3 px-6">Export to PNG</button>
      </div>
    </div>
  );
}
Page.displayName = 'Page';


const Poster = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} style={{
      width: '297mm',
      height: '420mm',
      backgroundImage: `url('/yo2.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
  }}>
    <div className="pt-16 px-10 w-full">
      <div className="flex flex-col gap-5 items-center border-b border-zinc-500 text-zinc-300 w-full pb-5">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <DoneAllRoundedIcon sx={{fontSize: 64}}/>
              <p className="text-7xl font-bold">Solwo</p>
            </div>
            <p className="text-4xl font-semibold">Systém pro zadávání ticketů</p>

            <div className="flex gap-3 text-3xl">
              <div className="flex flex-col gap-3">
                <p>Autor projektu:</p>
                <p>Vedoucí práce:</p>
              </div>
              <div className="flex flex-col font-semibold gap-3">
                <p>Adam Gombos</p>
                <p>Sergey Kuroedov</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-3">
            <div className="flex flex-col items-end text-4xl font-semibold gap-2">
              <img src="/logo.jpg" alt="logo" width={180}/>
              <p>SPŠEaG</p>
              <p>V Úžlabině</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-8">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center gap-3">
            <CodeLine>Webová aplikace</CodeLine>
            <CodeLine>Prostor pro řešení problémů</CodeLine>
            <CodeLine>user friendly</CodeLine>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M44.674,37.568l-17.269,-36.078c-0.89,-1.859 -3.473,-2.012 -4.575,-0.271l-19.151,30.242c-0.413,0.652 -0.401,1.486 0.03,2.126l9.647,14.323c0.599,0.889 1.7,1.29 2.729,0.994l26.994,-7.775c1.517,-0.437 2.278,-2.135 1.595,-3.561zM40.86,38.865l-22.703,6.369c-0.526,0.148 -1.02,-0.318 -0.906,-0.853l8.049,-37.632c0.145,-0.678 1.064,-0.788 1.364,-0.163l14.843,30.881c0.259,0.566 -0.048,1.23 -0.647,1.398z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M5,4c-0.55226,0.00006 -0.99994,0.44774 -1,1v40c0.00006,0.55226 0.44774,0.99994 1,1h40c0.55226,-0.00006 0.99994,-0.44774 1,-1v-40c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM6,6h38v38h-38zM15,23v3.44531h5v15.55469h4v-15.55469h5v-3.44531zM36.69141,23.00977c-3.11462,-0.0124 -6.67383,0.93145 -6.67383,5.31445c0,5.73 7.7207,5.73141 7.7207,8.31641c0,0.245 0.10391,2.02539 -2.62109,2.02539c-2.725,0 -4.99609,-1.71289 -4.99609,-1.71289v4.1582c0,0 11.88086,3.84273 11.88086,-4.82227c-0.001,-5.625 -7.79297,-5.34367 -7.79297,-8.13867c0,-1.083 0.76939,-2.0957 2.90039,-2.0957c2.131,0 4.01758,1.25781 4.01758,1.25781l0.14063,-3.70508c0,0 -2.15369,-0.58801 -4.57617,-0.59766z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<defs><linearGradient x1="24" y1="43.734" x2="24" y2="4.266" gradientUnits="userSpaceOnUse" id="color-1_MWiBjkuHeMVq_gr1"><stop offset="0" stop-color="#fbfbfb"></stop><stop offset="0.465" stop-color="#ffffff"></stop><stop offset="1" stop-color="#ffffff"></stop></linearGradient><linearGradient x1="30.512" y1="33.021" x2="30.512" y2="18.431" gradientUnits="userSpaceOnUse" id="color-2_MWiBjkuHeMVq_gr2"><stop offset="0.377" stop-color="#ffffff" stop-opacity="0"></stop><stop offset="0.666" stop-color="#000000" stop-opacity="0.54902"></stop><stop offset="0.988" stop-color="#000000"></stop></linearGradient><linearGradient x1="22.102" y1="21.443" x2="36.661" y2="40.529" gradientUnits="userSpaceOnUse" id="color-3_MWiBjkuHeMVq_gr3"><stop offset="0.296" stop-color="#000000"></stop><stop offset="0.521" stop-color="#000000" stop-opacity="0.50196"></stop><stop offset="0.838" stop-color="#ffffff" stop-opacity="0"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)"><circle cx="24" cy="24" r="19.734" fill="url(#color-1_MWiBjkuHeMVq_gr1)"></circle><rect x="15.992" y="16.027" width="3.023" height="15.996" fill="#000000"></rect><rect x="29.035" y="15.957" width="2.953" height="14.59" fill="url(#color-2_MWiBjkuHeMVq_gr2)"></rect><path d="M36.781,38.094l-2.613,0.996l-18.176,-23.063h3.516z" fill="url(#color-3_MWiBjkuHeMVq_gr3)"></path></g></g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
</svg>


          </div>
          <div>
            <div className="border-4 border-zinc-400 rounded-2xl overflow-hidden">
              <img src="/logo.jpg" alt="" width={180} height={180}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
));
Poster.displayName = 'Poster';

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-center">
      <ArrowForwardIosRoundedIcon fontSize="small"/>
      <p className="text-3xl">{children}</p>
    </div>
  );
}