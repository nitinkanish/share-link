import Link from 'next/link'
import React from 'react'
import logoImage from '../assets/img/logo.svg'
import Image from 'next/image'

interface NameProps {
    params: { nameSlug: string }
}

const Name:React.FC<NameProps> = ({ params }) => {
  return (
    <>
    <div className="main-wrapper">
      <div className="container">
        <div className="inner-container">

        <div className="header">
          <div className="mainlogo">
            <Link href="">
              <Image src={logoImage} width={250} height={90} alt="fgxdfgd"></Image>
            </Link>
          </div>
        </div>
        <div className="main-wrapper-inner">
          <div className="inner-content">
            <h3>Invited you to join lit.it</h3>
            <input type="text" value={`https://j.lit.it/${params.nameSlug}`}/>
            <p>Copy the refferal link and paste it into your phone browser if download button doesn&apos;t work.</p>
          </div>
        </div>
        <div className="main-footer">
          <h2>Watch viral videos</h2>
          <h3 className="colored-text">
            and get rewards
          </h3>
        </div>
      </div>
        </div>
    </div>
    <div>This is my name : {params.nameSlug}</div>
    </>
  )
}

export default Name
