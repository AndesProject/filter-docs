import { createContext } from 'react'

import type { ReactNode } from 'react'
import type { RouteItem } from '../../routes'

// Tipos para el contexto
interface LayoutState {
  // Header
  headerTitle: string
  headerSubtitle?: string
  headerVisible: boolean
  headerActions?: ReactNode

  // Sidebar
  sidebarOpen: boolean
  sidebarItems: RouteItem[]
  sidebarVisible: boolean

  // Overlay
  overlayVisible: boolean
  overlayContent?: ReactNode
}

export interface LayoutContextType extends LayoutState {
  // Header actions
  setHeaderTitle: (title: string) => void
  setHeaderActions: (actions: ReactNode) => void
  setHeaderVisible: (visible: boolean) => void

  // Sidebar actions
  toggleSidebar: () => void
  openSidebar: () => void
  closeSidebar: () => void
  setSidebarItems: (items: RouteItem[]) => void
  setSidebarVisible: (visible: boolean) => void

  // Overlay actions
  setOverlayVisible: (visible: boolean, content?: ReactNode) => void
  hideOverlay: () => void

  // Utility actions
  resetLayout: () => void
}

// Crear el contexto
export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
)
