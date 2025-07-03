"use client";

import "./modal-video.css";
import { useState, useRef } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface ModalVideoProps {
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="modal-video">
      <div className="modal-video-illustration" aria-hidden="true">
        <img
          className="modal-video-illustration-img"
          src="/images/secondary-illustration.svg"
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>
      <button
        className="modal-video-thumb-btn"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
      >
        <figure className="modal-video-thumb-figure">
          <img
            className="modal-video-thumb-img"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
          />
        </figure>
        <span className="modal-video-play">
          <span className="modal-video-play-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
            >
              <path
                fill="url(#pla)"
                fillRule="evenodd"
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                clipRule="evenodd"
              />
              <defs>
                <linearGradient
                  id="pla"
                  x1={10}
                  x2={10}
                  y1={0}
                  y2={20}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6366F1" />
                  <stop offset={1} stopColor="#6366F1" stopOpacity=".72" />
                </linearGradient>
              </defs>
            </svg>
            <span className="modal-video-play-label">
              Watch Demo <span className="modal-video-play-duration">- 2:43</span>
            </span>
          </span>
        </span>
      </button>
      <Dialog
        initialFocus={videoRef}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogBackdrop className="modal-video-backdrop" />
        <div className="modal-video-dialog-wrapper">
          <div className="modal-video-dialog-inner">
            <DialogPanel className="modal-video-panel">
              <video
                ref={videoRef}
                width={videoWidth}
                height={videoHeight}
                loop
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
