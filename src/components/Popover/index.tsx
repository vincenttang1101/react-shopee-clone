import { type ElementType, useRef, useState } from 'react'
import { type Placement, FloatingPortal, arrow, offset, shift, useFloating } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

type IPopover = {
  initialOpen?: boolean
  as?: ElementType
  className?: string
  children: React.ReactNode
  renderPopover: React.ReactNode
  placement?: Placement
}

export default function Popover({
  initialOpen = false,
  as: Element = 'div',
  className,
  children,
  renderPopover,
  placement = 'bottom-end'
}: IPopover) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const arrowRef = useRef(null)
  const floatConfig = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      arrow({
        element: arrowRef
      }),
      offset(10),
      shift()
    ],
    transform: false,
    placement: placement
  })

  const showPopover = () => {
    setIsOpen(true)
  }

  const hidePopover = () => {
    setIsOpen(false)
  }

  return (
    <Element
      className={className}
      ref={floatConfig.refs.setReference}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <FloatingPortal>
            <motion.div
              ref={floatConfig.refs.setFloating}
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
                className='-translate-y-[100%] border-[11px] border-solid border-white border-x-transparent border-t-transparent'
              />
              {renderPopover}
            </motion.div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </Element>
  )
}
