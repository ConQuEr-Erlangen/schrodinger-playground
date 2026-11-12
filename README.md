# Schrödinger Playground

An interactive 2D quantum mechanics playground that runs in the browser (WebGL 2). Launch wave packets, draw walls, and watch interference, tunnelling, scattering and bound states in real time.

Scenes include the double and single slit, a tunnelling barrier, a harmonic trap, a crystal, Rutherford scattering, a Coulomb orbit, a Kagome lattice, the quantum Hall edge, a stadium billiard, a quantum maze and quantum ping pong. Time can be reversed, and pictures can be turned into wavefunctions.

## Pages

| File | What it is |
|---|---|
| `index.html` | The playground |
| `hydrogen-3d.html` | Hydrogen orbitals and their superpositions in 3D |
| `level-editor.html` | Editor for quantum maze levels |
| `maze-levels.js` | The maze levels |

Everything is static: open `index.html` in a browser, or serve the folder with any web server. Keep the four files together so the links between them work.

## Numerics

Lattice units ħ = m = Δx = 1, with a fourth-order Laplacian. Without a magnetic field the Schrödinger equation is integrated with Visscher's staggered leapfrog. With a field B ≠ 0 a second-order differencing scheme takes over, with the field entering as Peierls phases in the symmetric gauge.

Created by Daniel Burgarth using Claude.
