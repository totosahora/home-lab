/* 英文介绍 · 第 1 批 */
const GAMES_EN_1 = {
  "optics": {
    title: "Light Dispersion Lab",
    concept: "Dispersion: white light splits into colors because each wavelength bends by a different amount when passing through glass.",
    plain: "Shine white light through a prism and watch it fan out into a rainbow! Red bends the least, violet the most."
  },
  "circuit": {
    title: "Electric Circuit Lab",
    concept: "Electric current is the flow of charge through a closed loop; a complete circuit with a power source makes devices work.",
    plain: "Snap together batteries, bulbs, switches, and a fan. Close the loop and watch the electric current race around!"
  },
  "pipes": {
    title: "Little Pipe Plumber",
    concept: "Fluid flows from high to low pressure; connected pipes let water follow an open path to where it is needed.",
    plain: "Piece together colorful pipes and dig tunnels to carry water to every thirsty plant. Can you keep them all happy?"
  },
  "billiards": {
    title: "Junior Billiards Player",
    concept: "Momentum is mass times velocity; when balls collide, momentum transfers between them, setting their new directions and speeds.",
    plain: "Aim, shoot, and bounce! The guide line shows exactly where your ball will roll after it bumps into another."
  },
  "bowling": {
    title: "Little Bowling Champ",
    concept: "Impulse is force applied over time; a longer, stronger push gives the ball more momentum to knock pins down.",
    plain: "Press and hold to charge up your throw, then let go! A full strike is the coolest thing in the alley."
  },
  "shadow-light": {
    title: "Shadows and Light",
    concept: "Light travels in straight lines; an opaque object blocks it, forming a shadow whose size depends on distances to light and screen.",
    plain: "Drag the object and the lamp around. Move them closer or farther and watch the shadow grow huge or shrink tiny!"
  },
  "magnet": {
    title: "What Magnets Attract",
    concept: "Magnets attract ferromagnetic materials like iron, nickel, and cobalt, but not wood, plastic, or rubber.",
    plain: "Wave your magnet over everything in the room. Which objects jump and stick? Try the spoon, the key, the crayon!"
  },
  "sink-float": {
    title: "Sink or Float Test",
    concept: "An object floats in water when its density is less than water's density, and sinks when its density is greater.",
    plain: "Guess first: will it sink or float? Then drop it in the water and see if your guess was right!"
  },
  "push-pull": {
    title: "Push and Pull",
    concept: "A force is a push or a pull that can change an object's motion — making it start, stop, speed up, or change direction.",
    plain: "Give things a little push or a gentle pull. Feel how forces get the world moving!"
  },
  "sound-pitch": {
    title: "High and Low Sounds",
    concept: "Pitch depends on vibration frequency: shorter strings vibrate faster and produce higher-pitched sounds.",
    plain: "Pluck long strings and short strings. Short ones sing high like a bird, long ones hum low like a bear!"
  },
  "simple-circuit": {
    title: "Light the Bulb",
    concept: "A bulb lights only in a closed circuit, where current flows from the battery's positive terminal through the bulb back to the negative terminal.",
    plain: "One battery, one bulb, a few wires. Connect them just right and — ta-da! — the light turns on."
  },
  "seesaw": {
    title: "Balancing Seesaw",
    concept: "A lever balances when the turning effects (torques) on both sides are equal: heavier side closer in, lighter side farther out.",
    plain: "Put little animals on both ends of the seesaw. Slide them around until it sits perfectly level!"
  },
  "lever-pulley": {
    title: "Levers and Pulleys",
    concept: "Levers and pulleys trade distance for force: pulling farther with a smaller force can lift a heavy load.",
    plain: "Use a lever or a pulley to hoist something super heavy. Are you saving effort or spending it? Try both!"
  },
  "friction-car": {
    title: "Friction Car Race",
    concept: "Friction is a force that resists sliding between surfaces; rougher surfaces create more friction and slow objects faster.",
    plain: "Push the same car across a towel, wood, and ice. Which surface lets it zoom farthest? The answer might surprise you."
  },
  "spring-force": {
    title: "Springs and Elastic Force",
    concept: "Elastic force grows with stretch: within its limit, a spring's extension is proportional to the force pulling it (Hooke's law).",
    plain: "Hang weights on a spring and watch it stretch. Double the weight, double the stretch — there's a pattern hiding here!"
  },
  "heat-transfer": {
    title: "Heat Conduction",
    concept: "Conduction is heat moving through a material from the hot end to the cold end; metals conduct heat much faster than wood.",
    plain: "Stick a metal spoon and a wooden spoon in hot water. Which handle gets warm first? Touch and find out!"
  },
  "sound-vibrate": {
    title: "Sound and Vibration",
    concept: "Sound is produced by vibrating objects; the vibration travels through air as a wave that our ears detect.",
    plain: "Sprinkle salt on a speaker and turn up the sound. Watch the salt dance — now you can see sound!"
  },
  "simple-machines": {
    title: "Simple Machine Combo",
    concept: "Simple machines — levers, pulleys, gears — can be combined so each stage multiplies force, doing big work with small effort.",
    plain: "Mix levers, pulleys, and gears to build your own super machine that lifts huge loads with a tiny tug."
  },
  "siphon": {
    title: "Siphon and Water Level",
    concept: "In connected containers, water settles at the same height; a siphon uses air pressure and gravity to move water over a hump.",
    plain: "Which way does water flow in joined tubes? Fill the hose, tip it over the edge, and start your own siphon!"
  },
  "sundial": {
    title: "Sundial Time-Telling",
    concept: "As the Sun moves across the sky, shadows change length and direction; a sundial reads time from its shadow's position.",
    plain: "Drag the sun across the sky and watch the sundial's shadow swing around like a giant clock hand."
  },
  "motion-graph": {
    title: "Motion Graphs",
    concept: "For uniform motion, the position-time graph is a straight line whose slope equals velocity; the velocity-time graph is flat.",
    plain: "Drive the little car, then draw its story as s-t and v-t graphs. Steady speed makes straight lines!"
  },
  "force-compose": {
    title: "Combining Forces",
    concept: "Forces are vectors; two forces on one object add by the parallelogram rule, giving a single resultant force.",
    plain: "Two pulls tug one object. Where does it actually go? Add the arrows and find the winning direction."
  },
  "force-balance": {
    title: "Balanced Forces",
    concept: "An object stays still or moves at constant velocity when all forces on it cancel out — equal in size, opposite in direction.",
    plain: "When does an object sit perfectly still? Line up the forces so they exactly cancel — total tug-of-war tie!"
  },
  "pressure-buoy": {
    title: "Pressure and Buoyancy",
    concept: "Liquid pressure increases with depth, and buoyant force equals the weight of displaced liquid — denser liquid pushes up harder.",
    plain: "Dunk objects deeper or pour in denser liquid. Feel how the water's upward push changes. Balloons, watch out!"
  },
  "density-lab": {
    title: "Density Detective",
    concept: "Density is mass divided by volume (ρ = m/V); every pure material has its own density, so it works like an ID card.",
    plain: "Weigh it, measure it, do the math. Is that shiny chunk real gold — or a sneaky fake? You be the detective."
  }
};
