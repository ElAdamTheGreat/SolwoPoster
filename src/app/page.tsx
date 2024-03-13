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

  return (
    <div className="flex flex-col gap-5 pb-5">
      <Poster ref={posterRef} />
      <button onClick={exportToPdf} className="text-4xl font-bold text-white">Export to PDF</button>
    </div>
  );
}

const Poster = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} style={{
      width: '297mm',
      height: '420mm',
      backgroundImage: `url('/yo2.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
  }}>
    <div className="flex flex-col gap-10 items-center text-zinc-300 pt-16 px-10 w-full">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <DoneAllRoundedIcon sx={{fontSize: 64}}/>
            <p className="text-7xl font-bold">Solwo</p>
          </div>
          <p className="text-3xl font-semibold">Systém pro zadávání ticketů</p>
        </div>
        <div className="flex gap-3 pt-3">
          <div className="flex flex-col items-end text-2xl gap-1">
            <p>SPŠEaG</p>
            <p>V Úžlabině</p>
          </div>
        </div>
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

      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <ArrowForwardIosRoundedIcon fontSize="medium"/>
          <p className="text-3xl">Coding</p>
        </div>
        <div className="flex gap-3 items-center">
          <ArrowForwardIosRoundedIcon fontSize="medium"/>
          <p className="text-3xl">More coding</p>
        </div>
        <div className="flex gap-3 items-center">
          <ArrowForwardIosRoundedIcon fontSize="medium"/>
          <p className="text-3xl">Even more coding</p>
        </div>
      </div>
      
    </div> 
  </div>
));