'use client'
import Link from 'next/link'
import React from 'react'
import logoImage from '../assets/img/logo.svg'
import appStore from '../assets/img/appStore.png'
import playMarket from '../assets/img/playMarket.png'
import copy from '../assets/img/copy-svgrepo-com.svg'
import Image from 'next/image'
import { useState } from 'react';

interface NameProps {
  params: { nameSlug: string }
}

const Name: React.FC<{ params: { nameSlug: string } }> = ({ params }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://j.lit.it/${params.nameSlug}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }
  return (
    <>
      <div className="main-wrapper">
        <div className="container m-auto">
          <div className="inner-container">

            <div className="header">
              <div className="mainlogo py-4">
                <Link href="">
                  <Image src={logoImage} width={150} height={60} alt="Lit It rewards"></Image>
                </Link>
              </div>
            </div>
            <div className="main-wrapper-inner">
              <div className="inner-content gap-4">
                <h3>Invited you to join lit.it</h3>
                <div className="py-4">
                  <div className="relative inline-block">
                    <input type="text" className='text-black' value={`${params.nameSlug}`} />
                    <button className='absolute right-4 top-0 bottom-0 m-auto text-black' onClick={handleCopy}>
                      <Image src={copy} width={20} height={20} alt=''></Image>
                    </button>
                  </div>

                </div>
                <div className="py-4">
                  <div className="hero__store-btn flex justify-center gap-20">
                    <a href="https://apps.apple.com/us/app/lit-it-short-video-app/id1610743469" data-download-link="true" target="_blank">
                      <Image src={appStore} width={180} height={68} alt="" className="store-img" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.litit.app" data-download-link="true" target="_blank">
                      <Image src={playMarket} width={180} height={68} alt="" className="store-img" />

                    </a>
                  </div>
                </div>
                <p>Copy the referral code and paste it or enter into your mobile app during the signup process.</p>
              </div>
            </div>
            <div className="main-footer py-4">
              <p>&copy; 2024 Lit it</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Name
