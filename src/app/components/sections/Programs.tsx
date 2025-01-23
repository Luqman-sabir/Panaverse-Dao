import Image from 'next/image'
import React from 'react'
import Outcome from '/public/images/outcome-poster.webp'

const Outcomepoints = [
  'Product Ownership',
  'Freelancing',
  'Global Marketing by Panaverse DAO',
  'Boosting Economy.',
]

function Programs() {
  return (
    <div className="mt-16 md:mt-28 flex items-center flex-col-reverse md:flex-row">
      {/* Left side div */}
      <div className="flex-1">
        <Image
          src={Outcome}
          alt="outcome"
          layout="responsive"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>

      {/* Right side div */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-5xl font-bold">
          The Outcome for Participants of the Program
        </h2>
        <p className="text-slate-600 text-lg mt-4">
          As a graduate of this program, you will own valuable products such as Full-Stack App Templates,
          AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also
          have the opportunity to offer your services at a rate of $50 per hour, providing a path to
          financial stability while contributing to the growth of Pakistan's software exports.
        </p>
        <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-4">
          {Outcomepoints.map((item, i) => (
            <div key={i}>
              <h3 className="font-medium text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Programs
