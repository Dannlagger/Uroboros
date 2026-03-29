'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.85
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const states = gsap.utils.toArray<HTMLElement>('.scroll-state')

    states.forEach((state, index) => {
      gsap.fromTo(
        state,
        { opacity: 0.35 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: state,
            start: 'top center',
            end: 'bottom center',
            scrub: true
          }
        }
      )

      ScrollTrigger.create({
        trigger: state,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => document.body.setAttribute('data-active-state', String(index)),
        onEnterBack: () => document.body.setAttribute('data-active-state', String(index))
      })
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
