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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <DoneAllRoundedIcon sx={{fontSize: 64}}/>
                <p className="text-7xl font-bold">Solwo</p>
              </div>
              <p className="text-4xl font-semibold">Systém pro zadávání ticketů</p>
              <p className="text-2xl text-zinc-400">Webová aplikace</p>
            </div>

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
              <img src="/logo.jpg" alt="logo" width={128}/>
              <p>SPŠEaG</p>
              <p>V Úžlabině</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-8">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center gap-3">
            <CodeLine>Webová aplikace</CodeLine>
            <CodeLine>Prostor pro řešení problémů</CodeLine>
            <CodeLine>Uživatelsky přívětivé</CodeLine>
            <CodeLine>Responzivní design</CodeLine>

            

          </div>
          <div>
            <div className="border-[3px] border-zinc-600 rounded-2xl overflow-hidden">
              <img src="/solwo_[id]2.png" alt="" width={550}/>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            <div className="border-[3px] border-zinc-600 rounded-2xl overflow-hidden">
              <img src="/solwo_[id].png" alt="" width={550}/>
            </div>
          </div>
          <div>
            <p>Prisma</p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 256 256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M44.674,37.568l-17.269,-36.078c-0.89,-1.859 -3.473,-2.012 -4.575,-0.271l-19.151,30.242c-0.413,0.652 -0.401,1.486 0.03,2.126l9.647,14.323c0.599,0.889 1.7,1.29 2.729,0.994l26.994,-7.775c1.517,-0.437 2.278,-2.135 1.595,-3.561zM40.86,38.865l-22.703,6.369c-0.526,0.148 -1.02,-0.318 -0.906,-0.853l8.049,-37.632c0.145,-0.678 1.064,-0.788 1.364,-0.163l14.843,30.881c0.259,0.566 -0.048,1.23 -0.647,1.398z"></path></g></g>
            </svg>

            <p>TypeScript</p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
            </svg>

            <p>Next.js</p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
              <defs><linearGradient x1="24" y1="43.734" x2="24" y2="4.266" gradientUnits="userSpaceOnUse" id="color-1_MWiBjkuHeMVq_gr1"><stop offset="0" stop-color="#fbfbfb"></stop><stop offset="0.465" stop-color="#ffffff"></stop><stop offset="1" stop-color="#ffffff"></stop></linearGradient><linearGradient x1="30.512" y1="33.021" x2="30.512" y2="18.431" gradientUnits="userSpaceOnUse" id="color-2_MWiBjkuHeMVq_gr2"><stop offset="0.377" stop-color="#ffffff" stopOpacity="0"></stop><stop offset="0.666" stop-color="#000000" stopOpacity="0.54902"></stop><stop offset="0.988" stop-color="#000000"></stop></linearGradient><linearGradient x1="22.102" y1="21.443" x2="36.661" y2="40.529" gradientUnits="userSpaceOnUse" id="color-3_MWiBjkuHeMVq_gr3"><stop offset="0.296" stop-color="#000000"></stop><stop offset="0.521" stop-color="#000000" stopOpacity="0.50196"></stop><stop offset="0.838" stop-color="#ffffff" stopOpacity="0"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)"><circle cx="24" cy="24" r="19.734" fill="url(#color-1_MWiBjkuHeMVq_gr1)"></circle><rect x="15.992" y="16.027" width="3.023" height="15.996" fill="#000000"></rect><rect x="29.035" y="15.957" width="2.953" height="14.59" fill="url(#color-2_MWiBjkuHeMVq_gr2)"></rect><path d="M36.781,38.094l-2.613,0.996l-18.176,-23.063h3.516z" fill="url(#color-3_MWiBjkuHeMVq_gr3)"></path></g></g>
            </svg>

            <p>Tailwind CSS</p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
            </svg>
            
            <p>tRPC</p>
            <svg width="150" height="50" viewBox="0 0 429 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
              <g>
                <path d="M90.5 0H37.5C16.7893 0 0 16.7893 0 37.5V90.5C0 111.211 16.7893 128 37.5 128H90.5C111.211 128 128 111.211 128 90.5V37.5C128 16.7893 111.211 0 90.5 0Z" fill="#398CCB"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.8615 18.75L81.6307 29.002V34.639L103.138 47.0595V68.306L108.908 71.6365V92.152L91.15 102.404L83.2662 97.8445L64.098 108.912L45.0445 97.9085L37.2713 102.404L19.5135 92.1345V71.6365L25.0578 68.4358V47.0595L46.1038 34.9095L46.1155 34.909V29.002L63.8615 18.75ZM81.6307 39.9698V49.5058L63.873 59.7578L46.1155 49.5058V40.234L46.1038 40.2345L29.673 49.725V65.771L37.2713 61.3845L55.0288 71.6365V92.1345L49.6565 95.2413L64.098 103.581L78.6545 95.178L73.3922 92.1345V71.6365L91.15 61.3845L98.523 65.6413V49.725L81.6307 39.9698ZM78.0077 89.4923V76.9788L88.8422 83.2328V95.7463L78.0077 89.4923ZM104.292 76.9615L93.4577 83.2155V95.7463L104.292 89.475V76.9615ZM24.1289 89.475V76.9615L34.9635 83.2155V95.7288L24.1289 89.475ZM50.4135 76.9615L39.5788 83.2155V95.7288L50.4135 89.475V76.9615ZM80.3155 72.9808L91.15 66.727L101.984 72.9808L91.15 79.2405L80.3155 72.9808ZM37.2713 66.7095L26.4365 72.9808L37.2713 79.223L48.1058 72.9808L37.2713 66.7095ZM50.7308 46.8405V34.327L61.5537 40.5865V53.0943L50.7308 46.8405ZM77.0038 34.327L66.1807 40.5865V53.0885L77.0038 46.8405V34.327ZM53.0385 30.3345L63.8615 24.0808L74.6962 30.3345L63.8615 36.5885L53.0385 30.3345Z" fill="white"></path>
              </g>
            </svg>
            
            
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