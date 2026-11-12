// Quantum maze levels for the Schrödinger Playground.
// Made with level-editor.html. Everything after "window.MAZE_LEVELS =" is plain JSON, so it can also be edited by hand.
window.MAZE_LEVELS = {
  "format": "quantum-maze",
  "version": 1,
  "levels": [
    {
      "name": "First bounce",
      "target": 55,
      "hint": "One mirror. Which angle sends the packet up?",
      "success": "A mirror at 45° turns the packet through a right angle, just as it would turn a beam of light.",
      "notes": "",
      "source": { "at": [0.15, 0.25], "angle": 0, "k": 1.2, "width": 0.035 },
      "detector": { "at": [0.95, 0.78], "r": 0.07 },
      "walls": [
        [[0.35, 0.55], [0.7, 0.55]],
        [[1.2, 0.4], [1.2, 0.9]]
      ],
      "parts": [
        { "type": "mirror", "at": [0.95, 0.25], "angle": 0, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 45 } }
      ]
    },
    {
      "name": "Periscope",
      "target": 40,
      "hint": "Two mirrors, and only one gap in the wall.",
      "success": "Two parallel mirrors make a periscope: the packet leaves in its original direction, shifted sideways.",
      "notes": "",
      "source": { "at": [0.15, 0.22], "angle": 0, "k": 1.2, "width": 0.035 },
      "detector": { "at": [1.4, 0.78], "r": 0.07 },
      "walls": [
        [[0.1, 0.5], [0.45, 0.5]],
        [[0.75, 0.5], [1.5, 0.5]],
        [[1.05, 0.12], [1.05, 0.5]]
      ],
      "parts": [
        { "type": "mirror", "at": [0.6, 0.22], "angle": 0, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 45 } },
        { "type": "mirror", "at": [0.6, 0.78], "angle": 90, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 45 } }
      ]
    },
    {
      "name": "Around the block",
      "target": 30,
      "hint": "Three mirrors take the long way round.",
      "success": "Each bounce costs a little: the packet keeps spreading, and every mirror catches only part of it.",
      "notes": "",
      "source": { "at": [0.2, 0.2], "angle": 90, "k": 1.2, "width": 0.035 },
      "detector": { "at": [0.75, 0.2], "r": 0.07 },
      "walls": [
        [[0.5, 0.35], [1.1, 0.35]],
        [[1.1, 0.35], [1.1, 0.62]],
        [[1.1, 0.62], [0.5, 0.62]],
        [[0.5, 0.62], [0.5, 0.35]],
        [[0.45, 0.1], [0.45, 0.3]]
      ],
      "parts": [
        { "type": "mirror", "at": [0.2, 0.82], "angle": 0, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 45 } },
        { "type": "mirror", "at": [1.38, 0.82], "angle": 0, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 135 } },
        { "type": "mirror", "at": [1.38, 0.2], "angle": 90, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 45 } }
      ]
    },
    {
      "name": "Through the slit",
      "target": 20,
      "hint": "The slit diffracts the packet. Aim straight through it.",
      "success": "The slit is only a few wavelengths wide, so the packet fans out behind it: that is diffraction.",
      "notes": "",
      "source": { "at": [0.15, 0.6], "angle": 0, "k": 1.2, "width": 0.035 },
      "detector": { "at": [1.4, 0.22], "r": 0.08 },
      "walls": [
        [[0.95, 0.06], [0.95, 0.185]],
        [[0.95, 0.255], [0.95, 0.94]]
      ],
      "parts": [
        { "type": "mirror", "at": [0.55, 0.6], "angle": 90, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 135 } },
        { "type": "mirror", "at": [0.55, 0.22], "angle": 0, "length": 0.22, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 135 } }
      ]
    },
    {
      "name": "Both ways at once",
      "target": 55,
      "hint": "The thin barriers are beam splitters: they pass half the packet and reflect half. One path alone can deliver at most a quarter.",
      "success": "Each splitter halves the packet, yet more than half arrived: the two paths interfere constructively at the second splitter. This is a Mach–Zehnder interferometer.",
      "notes": "Mach–Zehnder: both arms are equally long by symmetry, so they add up in the +x port of the second splitter (4TR ≈ 1) and cancel in the other. One arm alone delivers at most TR ≈ 1/4 of the packet.",
      "source": { "at": [0.15, 0.25], "angle": 0, "k": 1.2, "width": 0.035 },
      "detector": { "at": [1.42, 0.8], "r": 0.07 },
      "walls": [
        [[1.15, 0.35], [1.15, 0.65]]
      ],
      "parts": [
        { "type": "mirror", "at": [1.0, 0.25], "angle": 0, "length": 0.3, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 45 } },
        { "type": "mirror", "at": [0.45, 0.8], "angle": 90, "length": 0.3, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 45 } },
        { "type": "splitter", "at": [0.45, 0.25], "angle": 45, "length": 0.3, "v": 0.35 },
        { "type": "splitter", "at": [1.0, 0.8], "angle": 45, "length": 0.3, "v": 0.35 }
      ]
    },
    {
      "name": "First order",
      "target": 30,
      "hint": "Both the grating and the mirror turn. Find a diffraction order that reaches the mirror, and make it as bright as you can.",
      "success": "The grating splits the packet into diffraction orders. Turned to face the beam, it sends more of the packet into the first order.",
      "notes": "Phase grating, period 2π/0.6 Δx: facing the beam, its first orders leave at ±30° and its bumps dim the straight-on order. The source fires at 20°, so the grating works best turned to face it (about 105–110°); its +1 order then reaches the mirror, which must be at 115° to send it into the detector. Left at 90°, the grating delivers at most about 7%.",
      "source": { "at": [0.15, 0.2], "angle": 20, "k": 1.2, "width": 0.035 },
      "detector": { "at": [0.368, 0.665], "r": 0.08 },
      "walls": [],
      "parts": [
        { "type": "mirror", "at": [0.768, 0.665], "angle": 90, "length": 0.3, "v": 2.5, "adjust": { "angle": true }, "solution": { "angle": 115 } },
        { "type": "grating", "at": [0.479, 0.32], "angle": 90, "length": 0.3, "period": 10.472, "bar": 4.8, "v": 0.4, "adjust": { "angle": true }, "solution": { "angle": 105 } }
      ]
    }
  ]
};
