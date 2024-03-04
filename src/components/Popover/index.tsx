import { FloatingPortal, UseFloatingReturn } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface IPopover {
  floatConfig: UseFloatingReturn
  isOpen: boolean
  arrowRef: React.MutableRefObject<null>
}

export default function Popover({ floatConfig, isOpen, arrowRef }: IPopover) {
  return (
    <AnimatePresence>
      {isOpen && (
        <FloatingPortal>
          <motion.div
            ref={floatConfig.refs.setFloating}
            className='flex flex-col gap-y-7 rounded-sm bg-white px-10 py-6'
            style={{
              transformOrigin: `${floatConfig.middlewareData.arrow?.x}px top`,
              ...floatConfig.floatingStyles
            }}
            initial={{ opacity: 0, transform: 'scale(0)' }}
            animate={{ opacity: 1, transform: 'scale(1)' }}
            exit={{ opacity: 0, transform: 'scale(0)' }}
            transition={{ duration: 0.2 }}
          >
            <div
              ref={arrowRef}
              style={{
                position: 'absolute',
                left: floatConfig.middlewareData.arrow?.x,
                top: floatConfig.middlewareData.arrow?.y
              }}
              className='-translate-y-[168%] border-[11px] border-solid border-white border-x-transparent border-t-transparent'
            />
            <button className='hover:text-primaryColor'>Tiếng Việt</button>
            <button className='hover:text-primaryColor'>Tiếng Anh</button>
          </motion.div>
        </FloatingPortal>
      )}
    </AnimatePresence>
  )
}
