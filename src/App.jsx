/**
 * App Component
 * 
 * Main application component that orchestrates:
 * - 3D scene rendering
 * - UI overlay
 * - Mouse effects (spotlight and custom cursor)
 * - 3D interaction mode toggle
 */

import { useState } from 'react'
import ExperienceScene from './components/ExperienceScene'
import Interface from './components/Interface'
import Spotlight from './components/Spotlight'
import CustomCursor from './components/CustomCursor'

function App() {
    const [is3DMode, setIs3DMode] = useState(false)

    return (
        <div className="relative w-full h-screen bg-black text-white overflow-hidden cursor-none">
            <CustomCursor />
            <Spotlight />
            <ExperienceScene is3DMode={is3DMode} />
            <Interface is3DMode={is3DMode} setIs3DMode={setIs3DMode} />
        </div>
    )
}

export default App
