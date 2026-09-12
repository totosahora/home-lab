/* 小小科学乐园 · 英文介绍（由 4 个批次文件合并生成）
 * 每个条目: title 英文名 / concept 概念定义 / plain 通俗解释 */
const GAMES_EN = {
  "optics": {
    "title": "Light Dispersion Lab",
    "concept": "Dispersion: white light splits into colors because each wavelength bends by a different amount when passing through glass.",
    "plain": "Shine white light through a prism and watch it fan out into a rainbow! Red bends the least, violet the most."
  },
  "circuit": {
    "title": "Electric Circuit Lab",
    "concept": "Electric current is the flow of charge through a closed loop; a complete circuit with a power source makes devices work.",
    "plain": "Snap together batteries, bulbs, switches, and a fan. Close the loop and watch the electric current race around!"
  },
  "pipes": {
    "title": "Little Pipe Plumber",
    "concept": "Fluid flows from high to low pressure; connected pipes let water follow an open path to where it is needed.",
    "plain": "Piece together colorful pipes and dig tunnels to carry water to every thirsty plant. Can you keep them all happy?"
  },
  "billiards": {
    "title": "Junior Billiards Player",
    "concept": "Momentum is mass times velocity; when balls collide, momentum transfers between them, setting their new directions and speeds.",
    "plain": "Aim, shoot, and bounce! The guide line shows exactly where your ball will roll after it bumps into another."
  },
  "bowling": {
    "title": "Little Bowling Champ",
    "concept": "Impulse is force applied over time; a longer, stronger push gives the ball more momentum to knock pins down.",
    "plain": "Press and hold to charge up your throw, then let go! A full strike is the coolest thing in the alley."
  },
  "shadow-light": {
    "title": "Shadows and Light",
    "concept": "Light travels in straight lines; an opaque object blocks it, forming a shadow whose size depends on distances to light and screen.",
    "plain": "Drag the object and the lamp around. Move them closer or farther and watch the shadow grow huge or shrink tiny!"
  },
  "magnet": {
    "title": "What Magnets Attract",
    "concept": "Magnets attract ferromagnetic materials like iron, nickel, and cobalt, but not wood, plastic, or rubber.",
    "plain": "Wave your magnet over everything in the room. Which objects jump and stick? Try the spoon, the key, the crayon!"
  },
  "sink-float": {
    "title": "Sink or Float Test",
    "concept": "An object floats in water when its density is less than water's density, and sinks when its density is greater.",
    "plain": "Guess first: will it sink or float? Then drop it in the water and see if your guess was right!"
  },
  "push-pull": {
    "title": "Push and Pull",
    "concept": "A force is a push or a pull that can change an object's motion — making it start, stop, speed up, or change direction.",
    "plain": "Give things a little push or a gentle pull. Feel how forces get the world moving!"
  },
  "sound-pitch": {
    "title": "High and Low Sounds",
    "concept": "Pitch depends on vibration frequency: shorter strings vibrate faster and produce higher-pitched sounds.",
    "plain": "Pluck long strings and short strings. Short ones sing high like a bird, long ones hum low like a bear!"
  },
  "simple-circuit": {
    "title": "Light the Bulb",
    "concept": "A bulb lights only in a closed circuit, where current flows from the battery's positive terminal through the bulb back to the negative terminal.",
    "plain": "One battery, one bulb, a few wires. Connect them just right and — ta-da! — the light turns on."
  },
  "seesaw": {
    "title": "Balancing Seesaw",
    "concept": "A lever balances when the turning effects (torques) on both sides are equal: heavier side closer in, lighter side farther out.",
    "plain": "Put little animals on both ends of the seesaw. Slide them around until it sits perfectly level!"
  },
  "lever-pulley": {
    "title": "Levers and Pulleys",
    "concept": "Levers and pulleys trade distance for force: pulling farther with a smaller force can lift a heavy load.",
    "plain": "Use a lever or a pulley to hoist something super heavy. Are you saving effort or spending it? Try both!"
  },
  "friction-car": {
    "title": "Friction Car Race",
    "concept": "Friction is a force that resists sliding between surfaces; rougher surfaces create more friction and slow objects faster.",
    "plain": "Push the same car across a towel, wood, and ice. Which surface lets it zoom farthest? The answer might surprise you."
  },
  "spring-force": {
    "title": "Springs and Elastic Force",
    "concept": "Elastic force grows with stretch: within its limit, a spring's extension is proportional to the force pulling it (Hooke's law).",
    "plain": "Hang weights on a spring and watch it stretch. Double the weight, double the stretch — there's a pattern hiding here!"
  },
  "heat-transfer": {
    "title": "Heat Conduction",
    "concept": "Conduction is heat moving through a material from the hot end to the cold end; metals conduct heat much faster than wood.",
    "plain": "Stick a metal spoon and a wooden spoon in hot water. Which handle gets warm first? Touch and find out!"
  },
  "sound-vibrate": {
    "title": "Sound and Vibration",
    "concept": "Sound is produced by vibrating objects; the vibration travels through air as a wave that our ears detect.",
    "plain": "Sprinkle salt on a speaker and turn up the sound. Watch the salt dance — now you can see sound!"
  },
  "simple-machines": {
    "title": "Simple Machine Combo",
    "concept": "Simple machines — levers, pulleys, gears — can be combined so each stage multiplies force, doing big work with small effort.",
    "plain": "Mix levers, pulleys, and gears to build your own super machine that lifts huge loads with a tiny tug."
  },
  "siphon": {
    "title": "Siphon and Water Level",
    "concept": "In connected containers, water settles at the same height; a siphon uses air pressure and gravity to move water over a hump.",
    "plain": "Which way does water flow in joined tubes? Fill the hose, tip it over the edge, and start your own siphon!"
  },
  "sundial": {
    "title": "Sundial Time-Telling",
    "concept": "As the Sun moves across the sky, shadows change length and direction; a sundial reads time from its shadow's position.",
    "plain": "Drag the sun across the sky and watch the sundial's shadow swing around like a giant clock hand."
  },
  "motion-graph": {
    "title": "Motion Graphs",
    "concept": "For uniform motion, the position-time graph is a straight line whose slope equals velocity; the velocity-time graph is flat.",
    "plain": "Drive the little car, then draw its story as s-t and v-t graphs. Steady speed makes straight lines!"
  },
  "force-compose": {
    "title": "Combining Forces",
    "concept": "Forces are vectors; two forces on one object add by the parallelogram rule, giving a single resultant force.",
    "plain": "Two pulls tug one object. Where does it actually go? Add the arrows and find the winning direction."
  },
  "force-balance": {
    "title": "Balanced Forces",
    "concept": "An object stays still or moves at constant velocity when all forces on it cancel out — equal in size, opposite in direction.",
    "plain": "When does an object sit perfectly still? Line up the forces so they exactly cancel — total tug-of-war tie!"
  },
  "pressure-buoy": {
    "title": "Pressure and Buoyancy",
    "concept": "Liquid pressure increases with depth, and buoyant force equals the weight of displaced liquid — denser liquid pushes up harder.",
    "plain": "Dunk objects deeper or pour in denser liquid. Feel how the water's upward push changes. Balloons, watch out!"
  },
  "density-lab": {
    "title": "Density Detective",
    "concept": "Density is mass divided by volume (ρ = m/V); every pure material has its own density, so it works like an ID card.",
    "plain": "Weigh it, measure it, do the math. Is that shiny chunk real gold — or a sneaky fake? You be the detective."
  },
  "ohms-law": {
    "title": "Ohm's Law Lab",
    "concept": "Ohm's law: the current through a wire equals the voltage divided by the resistance, written as I = V / R.",
    "plain": "Turn up the voltage and more current flows; add more resistance and it slows down. Try it and see!"
  },
  "lens-imaging": {
    "title": "Convex Lens Imaging",
    "concept": "A convex lens bends light rays to form real or virtual images, and the image changes as the object moves relative to the focal point.",
    "plain": "Slide the candle closer and farther, and watch the picture on the screen grow, shrink, and even flip upside down!"
  },
  "wave-resonance": {
    "title": "Waves and Resonance",
    "concept": "Resonance happens when an object is pushed at its natural frequency, so it vibrates with a much larger amplitude.",
    "plain": "Pluck the string to see the wave shape, then hum at just the right note to make the glass sing back!"
  },
  "energy-skate": {
    "title": "Energy Skate Park",
    "concept": "Mechanical energy switches between kinetic energy (motion) and potential energy (height), while the total stays nearly constant.",
    "plain": "Build a ramp for your skater and watch speed turn into height and back again, like a roller coaster of energy!"
  },
  "work-power": {
    "title": "Work and Power",
    "concept": "Work is force times distance, and power is how fast that work is done, measured in watts.",
    "plain": "Carry the same box upstairs slowly or quickly — the work is the same, but who has more power?"
  },
  "heat-engine": {
    "title": "Simple Heat Engine",
    "concept": "A heat engine turns heat energy into motion, using hot steam or gas to push a piston or spin a wheel.",
    "plain": "Boil water to make steam, and let the steam push a little wheel around and around — you just built an engine!"
  },
  "dispersion-plus": {
    "title": "Advanced Dispersion",
    "concept": "Each material has a refractive index that tells how much it bends light, and each color of light bends slightly differently.",
    "plain": "Measure how much glass, water, and ice bend each color of light, then crunch the numbers like a real scientist!"
  },
  "projectile": {
    "title": "Projectile Motion",
    "concept": "A projectile follows a curved path called a parabola: its horizontal speed stays constant while gravity pulls it downward.",
    "plain": "Pick your launch angle and speed, then fire! Can you hit the far-away target with your flying arrow?"
  },
  "momentum": {
    "title": "Momentum Collisions",
    "concept": "Momentum, which is mass times velocity, is always conserved in a collision, even though kinetic energy may be lost.",
    "plain": "Crash the carts together! Bouncy or sticky — where did all the motion and energy go?"
  },
  "oscillation": {
    "title": "Springs and Pendulums",
    "concept": "A spring oscillator's period depends on mass and stiffness, while a pendulum's period depends on its length and gravity.",
    "plain": "Swing the pendulum and bounce the spring — what makes each one tick faster or slower?"
  },
  "wave-interfere": {
    "title": "Wave Interference",
    "concept": "When two waves meet, they add together: crests meeting crests make bigger waves, while crests meeting troughs cancel out.",
    "plain": "Two wave sources splash into each other. Find the spots where the water dances high and where it stays flat!"
  },
  "electric-field": {
    "title": "Electric Field Lines",
    "concept": "Electric charges create invisible fields around them, shown by field lines and equal-potential surfaces that map the forces.",
    "plain": "Place positive and negative charges on the board and reveal the invisible force patterns hiding in the space!"
  },
  "induction": {
    "title": "Induction Generator",
    "concept": "Electromagnetic induction: a changing magnetic field through a coil creates an electric current, which is how generators work.",
    "plain": "Shake the magnet through the coil — faster, faster! — and watch your movement light up the little bulb."
  },
  "orbit": {
    "title": "Gravity Orbits",
    "concept": "Gravity pulls a planet toward the star, and with just the right sideways speed the planet falls around it forever in an orbit.",
    "plain": "Give your planet a push and see if it loops around the star, spirals in, or flies away into space!"
  },
  "photoelectric": {
    "title": "Photoelectric Effect",
    "concept": "Light can knock electrons out of a metal, but only if each photon carries enough energy — color matters more than brightness.",
    "plain": "Shine different colors of light on the metal. Will blue light kick electrons out when red light can't?"
  },
  "three-states": {
    "title": "States of Matter",
    "concept": "Matter exists as solid, liquid, or gas, and heating or cooling makes it change from one state to another.",
    "plain": "Heat the ice cube and watch it melt into water, then puff away into steam. Ice, water, steam — all the same stuff!"
  },
  "mix-separate": {
    "title": "Mix and Separate",
    "concept": "Mixtures keep the properties of their parts, so we can separate them using tricks like dissolving, filtering, and evaporating.",
    "plain": "Oops, sand and salt got mixed together! Can you figure out how to pull them apart again?"
  },
  "dissolve-speed": {
    "title": "Dissolving Race",
    "concept": "A solid dissolves faster when you stir the water, heat it up, or crush the solid into smaller pieces.",
    "plain": "Stir it, warm it, or crush it — which trick makes the sugar disappear into the water the fastest?"
  },
  "build-molecule": {
    "title": "Molecule Builder",
    "concept": "Atoms join together in fixed numbers to form molecules, like two hydrogens plus one oxygen making a water molecule.",
    "plain": "Drag the atoms together and snap! You just built water, oxygen, and carbon dioxide molecules like tiny Lego."
  },
  "build-atom": {
    "title": "Atom Builder",
    "concept": "An atom has a nucleus of protons and neutrons, with electrons around it; the number of protons decides which element it is.",
    "plain": "Drop in protons, neutrons, and electrons, and build your very own atoms. What element will you create?"
  },
  "acid-base": {
    "title": "Acid-Base Indicators",
    "concept": "An indicator is a substance that changes color in acids and bases, helping us tell them apart, like purple cabbage juice.",
    "plain": "Drip magic purple cabbage juice into different liquids and watch it change color like a rainbow mood ring!"
  },
  "filter-evap": {
    "title": "Filter and Evaporate",
    "concept": "Filtration traps solid particles in paper, and evaporation boils the water away to leave dissolved solids like salt behind.",
    "plain": "Pour muddy water through a filter, then boil salty water dry. What's left behind each time?"
  },
  "combustion": {
    "title": "Fire Triangle",
    "concept": "Burning needs three things at once: a fuel, oxygen, and enough heat — take any one away and the fire stops.",
    "plain": "Fuel, air, and heat — a fire needs all three! Take one away and poof, the flame goes out."
  },
  "metal-activity": {
    "title": "Metal Activity Series",
    "concept": "Some metals are more reactive than others; a more reactive metal can push a less reactive one out of its solution.",
    "plain": "Drop an iron nail into blue copper sulfate solution and watch it grow a shiny copper coat!"
  },
  "air-composition": {
    "title": "What's in the Air",
    "concept": "Air is a mixture of gases, mostly nitrogen and about one fifth oxygen, which is the part that burning uses up.",
    "plain": "Cover a burning candle with a jar. When the flame dies, the water rises — that's the missing oxygen!"
  },
  "balance-eq": {
    "title": "Balance the Equation",
    "concept": "Chemical equation balancing: a reaction must have the same number of each kind of atom on both sides, because atoms are never created or destroyed.",
    "plain": "Drag atom groups to make both sides of the equation match. Nothing disappears in chemistry — count every atom!"
  },
  "concentration": {
    "title": "Mix the Right Concentration",
    "concept": "Concentration tells how much solute is dissolved in a certain amount of solution; you control it by measuring the solute and adding the solvent.",
    "plain": "Weigh the salt, add the water, and mix a solution with exactly the strength the recipe asks for. Too weak? Add more!"
  },
  "titration": {
    "title": "Virtual Titration",
    "concept": "Titration slowly adds a solution of known concentration to another until they exactly neutralize each other, shown by an indicator changing color.",
    "plain": "Add the liquid one drop at a time. The moment the color changes — stop! That's when the acid and base are perfectly matched."
  },
  "displacement": {
    "title": "Metal Swap Battle",
    "concept": "Displacement reaction: a more reactive metal can push a less reactive metal out of its salt solution and take its place.",
    "plain": "Which metal is stronger? Drop it in the solution and see if it kicks the other metal out — like taking a seat on the bench!"
  },
  "gas-prep": {
    "title": "Gas Making Lab",
    "concept": "Gas preparation: choosing the right generator for the reactants and the right collection method based on the gas's density and solubility.",
    "plain": "Build your own gas factory! Pick the right flask, then collect your gas — will you catch it over water or in an upside-down jar?"
  },
  "solubility": {
    "title": "Solubility Curves",
    "concept": "Solubility is the maximum amount of a substance that can dissolve at a given temperature; most solids dissolve more when heated.",
    "plain": "Heat the water and watch more solute dissolve. Cool it down and crystals grow back like magic snowflakes!"
  },
  "mass-conserve": {
    "title": "Mass Conservation",
    "concept": "Law of conservation of mass: the total mass of all substances stays the same before and after a chemical reaction in a closed system.",
    "plain": "Weigh everything before and after the reaction. Surprise — the scale shows exactly the same number! Atoms just rearrange."
  },
  "ph-color": {
    "title": "pH Color Mixer",
    "concept": "pH measures how acidic or basic a solution is on a scale from 0 to 14: below 7 is acidic, 7 is neutral, and above 7 is basic.",
    "plain": "Dip pH paper into everyday liquids — lemon juice, soap, soda — and watch it change color like a mood ring for chemistry!"
  },
  "polarity": {
    "title": "Molecular Polarity",
    "concept": "Polarity: in a polar molecule like water, electric charge is unevenly shared, so one end is slightly negative and the other slightly positive.",
    "plain": "Water molecules are tiny magnets with a plus end and a minus end. That's why a charged ruler can bend a stream of water!"
  },
  "periodic-hunt": {
    "title": "Periodic Table Treasure Hunt",
    "concept": "The periodic table organizes all elements by atomic number; elements in the same column have similar chemical properties.",
    "plain": "Follow the clues and hunt for elements on the big table. Can you find the lightest gas or the metal in your thermometer?"
  },
  "reaction-rate": {
    "title": "Reaction Rate",
    "concept": "Reaction rate is how fast reactants turn into products; higher temperature and higher concentration usually make reactions go faster.",
    "plain": "Turn up the heat or add more reactant — whoosh, the reaction speeds up! Find the recipe for the fastest fizz."
  },
  "equilibrium": {
    "title": "Chemical Equilibrium",
    "concept": "Chemical equilibrium is a balanced state where forward and reverse reactions happen at the same rate; changing conditions shifts the balance (Le Chatelier's principle).",
    "plain": "The reaction goes both ways at once! Squeeze it or heat it, and watch the balance slide to the other side."
  },
  "galvanic": {
    "title": "Battery & Electrolysis",
    "concept": "A galvanic cell turns chemical energy into electricity as electrons flow from the more reactive metal to the less reactive one through a wire.",
    "plain": "Stick zinc and copper into a solution and — zap! — electrons run through the wire like runners in a race. You built a battery!"
  },
  "titration-curve": {
    "title": "Titration Curves",
    "concept": "A titration curve plots pH against the volume added; the steep jump in the middle marks the equivalence point where acid and base exactly neutralize.",
    "plain": "Draw the pH curve drop by drop. Watch for the giant jump on the graph — that's the magic moment when everything is perfectly neutral!"
  },
  "organic-shape": {
    "title": "Organic Molecule Shapes",
    "concept": "Organic molecular geometry: a carbon atom forms four bonds pointing to the corners of a tetrahedron, giving molecules like methane their 3D shape.",
    "plain": "Snap atoms together to build methane and ethanol. Carbon loves four arms pointing out like a little 3D pyramid!"
  },
  "make-ten": {
    "title": "Make Ten Battle",
    "concept": "Number bonds to ten: pairs of numbers like 3 and 7 or 6 and 4 that add up to exactly 10, a foundation for fast mental addition.",
    "plain": "Drag the number bubbles together to make ten. Pop! 6 and 4 are best friends — which pairs can you find?"
  },
  "number-split": {
    "title": "Number Splitting",
    "concept": "Number decomposition: every number can be split into two or more parts in different ways, like 7 into 3 and 4 or 5 and 2.",
    "plain": "How many ways can you split 7? 3 and 4, 6 and 1... Find all the ways to share the candies between two plates!"
  },
  "tangram": {
    "title": "Tangram Puzzles",
    "concept": "A tangram is a classic puzzle of seven flat shapes — triangles, a square, and a parallelogram — that combine to form countless figures.",
    "plain": "Seven magic pieces can become a cat, a boat, or a house! Turn and flip them until the picture is complete."
  },
  "symmetry": {
    "title": "Shape Symmetry",
    "concept": "Symmetry: a shape has a line of symmetry if one half is the mirror image of the other half when folded along that line.",
    "plain": "Draw the other half of the butterfly so both wings match perfectly. Fold it in your mind — does it line up?"
  },
  "sort-count": {
    "title": "Sort and Count",
    "concept": "Classification and counting: grouping objects by attributes like color or shape, then counting how many are in each group.",
    "plain": "Red ones here, round ones there! Sort everything into baskets, then count: which basket has the most?"
  },
  "fraction-bar": {
    "title": "Fraction Bars",
    "concept": "Fractions name equal parts of a whole: cutting something into 2 equal pieces gives halves, into 4 equal pieces gives quarters.",
    "plain": "Slice the pizza! One piece out of two is a half; one out of four is a quarter. Which slice would you pick?"
  },
  "area-fill": {
    "title": "Fill the Area",
    "concept": "Area measures how much surface a shape covers; you can find it by counting how many unit squares fit inside without gaps.",
    "plain": "Cover the shape with little square tiles, no gaps allowed! Count the tiles — that's the area."
  },
  "compare": {
    "title": "Longer or Heavier",
    "concept": "Comparison and measurement: lining objects up or weighing them side by side to decide which is longer, heavier, or taller.",
    "plain": "Line them up and look closely — which pencil is longer? Which toy is heavier? Your eyes and the balance scale will tell!"
  },
  "pattern": {
    "title": "Simple Patterns",
    "concept": "A pattern is a sequence that repeats by a rule; spotting the rule lets you predict what comes next.",
    "plain": "Red, yellow, blue, red, yellow, blue... what comes next? Crack the color code and keep the pattern going!"
  },
  "plinko-junior": {
    "title": "Plinko Intuition",
    "concept": "Probability intuition: a falling ball bounces randomly left or right, and after many drops the balls pile up in a bell-shaped pattern.",
    "plain": "Drop the marbles and watch them bounce! Where will most of them land? Drop a hundred and see the hill they build."
  },
  "fraction-eq": {
    "title": "Equivalent Fractions Puzzle",
    "concept": "Equivalent fractions: different fractions can name the same amount, because multiplying numerator and denominator by the same number keeps the value unchanged.",
    "plain": "Did you know 1/2 and 2/4 are the same piece of cake? Snap the fraction tiles together and see which ones match!"
  },
  "area-model": {
    "title": "Area Model Multiplication",
    "concept": "Area model: a multiplication like 23 × 45 can be drawn as a rectangle split into parts, so the total area shows the product.",
    "plain": "Turn big multiplication into a grid of blocks! Count the little squares and watch two-digit times two-digit make sense."
  },
  "decimal-line": {
    "title": "Decimal Number Line",
    "concept": "Decimals on a number line: every decimal has its own spot between whole numbers, in order from small to large.",
    "plain": "Where does 0.5 live? Where does 1.25 live? Drag each decimal to its home on the number line!"
  },
  "protractor": {
    "title": "Protractor Angle Lab",
    "concept": "Angles: an angle measures how much one ray turns from another, in degrees; acute angles are under 90°, obtuse angles are over 90°.",
    "plain": "Spin the ray and read the angle! Can you spot a sharp acute angle and a wide obtuse one?"
  },
  "coord-plot": {
    "title": "Coordinate Treasure Plot",
    "concept": "Coordinates: an ordered pair (x, y) tells exactly where a point sits on a grid — x goes across, y goes up.",
    "plain": "Follow the (x, y) clues to dig up treasure! Plot enough points and a cute animal picture appears."
  },
  "factor-multiple": {
    "title": "Factors And Multiples",
    "concept": "Factors and multiples: a factor divides a number exactly with nothing left over; a multiple is that number times a whole number.",
    "plain": "Every number has factor friends! Find which numbers fit inside 12, 18, 24 — no leftovers allowed."
  },
  "max-area": {
    "title": "Biggest Garden Fence",
    "concept": "Maximum area: with a fixed perimeter, the rectangle with the biggest area is the one closest to a square.",
    "plain": "You only have 20 fence pieces — can you build the biggest veggie garden? Hint: square-ish wins!"
  },
  "chart-reading": {
    "title": "Chart Detective",
    "concept": "Reading charts: bar graphs compare amounts with bar heights, and line graphs show how something changes over time.",
    "plain": "Become a chart detective! Read the bars and lines, then answer the mystery questions."
  },
  "balance-intro": {
    "title": "Balance Scale Equations",
    "concept": "Equations as balance: an equation stays true if you do the same thing to both sides, just like a balanced scale.",
    "plain": "Take the same weights off both sides of the scale — ta-da, now you can see what x is!"
  },
  "tessellation": {
    "title": "Tessellation Tiles",
    "concept": "Tessellation: some shapes can tile a flat surface over and over with no gaps and no overlaps.",
    "plain": "Which shapes can cover the whole floor with no cracks? Try triangles, squares, hexagons — and maybe bees' favorite!"
  },
  "linear-graph": {
    "title": "Linear Function Explorer",
    "concept": "Linear functions: y = kx + b draws a straight line, where k is the slope (steepness) and b is where the line crosses the y-axis.",
    "plain": "Drag k and b and watch the line slide and tilt! Steeper hill or higher starting point — you choose."
  },
  "eq-system": {
    "title": "Equation System Scales",
    "concept": "Systems of equations: two equations together can pin down two unknowns, x and y, at the same time.",
    "plain": "Two scales, two mysteries! Use both clues together and solve for x and y."
  },
  "ratio-mix": {
    "title": "Juice Ratio Mixer",
    "concept": "Ratios: a ratio compares two amounts, like 1 part juice to 3 parts water, and it stays the same even when you make a bigger batch.",
    "plain": "Mix the yummiest juice! How much orange juice and how much water make the perfect cup?"
  },
  "pythagoras": {
    "title": "Pythagoras Puzzle Proof",
    "concept": "Pythagorean theorem: in a right triangle, a² + b² = c² — the squares on the two legs together equal the square on the hypotenuse.",
    "plain": "Puzzle time! Rearrange the pieces and prove with your own eyes that a² + b² really equals c²."
  },
  "circle-tangent": {
    "title": "Circle And Tangent",
    "concept": "Tangent to a circle: a tangent touches a circle at exactly one point and is perpendicular to the radius at that point.",
    "plain": "Slide the line toward the circle — when it just kisses the edge, something special happens with the radius. Can you see it?"
  },
  "prob-wheel": {
    "title": "Probability Spinner",
    "concept": "Probability: the chance of landing on a color equals that color's slice size compared to the whole wheel.",
    "plain": "Design your own spinner! Bigger red slice, more red wins — spin it and see if you're right."
  },
  "sampling": {
    "title": "Sampling Ball Mystery",
    "concept": "Sampling: drawing many balls at random lets you estimate what's inside the bag without ever peeking.",
    "plain": "No peeking! Pull a ball 100 times and use your counts to guess how many red balls hide in the bag."
  },
  "transform": {
    "title": "Shape Transformations",
    "concept": "Geometric transformations: sliding (translation), turning (rotation), and flipping (reflection) move a shape without changing its size or shape.",
    "plain": "Slide it, spin it, flip it! Where did the shape go? Track every move on the grid."
  },
  "function-machine": {
    "title": "Function Machine",
    "concept": "Functions: a function is a rule that takes each input number and always gives back one matching output number.",
    "plain": "Drop numbers into the mystery machine and watch what pops out! Can you guess the secret rule?"
  },
  "sequence": {
    "title": "Number Sequence Patterns",
    "concept": "Sequences: a sequence is a list of numbers following a rule — find the rule and you can predict what comes next.",
    "plain": "2, 4, 8, 16… what comes next? Crack the pattern and keep the chain going!"
  },
  "quadratic": {
    "title": "Quadratic Parabola Lab",
    "concept": "Quadratic functions: y = ax² + bx + c draws a parabola whose opening, width, and vertex depend on a, b, and c.",
    "plain": "Drag a, b, and c and watch the parabola stretch, flip, and move! Where's the tippy-top point?"
  },
  "unit-circle": {
    "title": "Unit Circle Trig",
    "concept": "Unit circle: on a circle of radius 1, a turning radius gives cosine as its x-coordinate and sine as its y-coordinate.",
    "plain": "Spin the radius around the circle and watch sin and cos dance up and down! Full circle, full story."
  },
  "vector-add": {
    "title": "Vector Addition",
    "concept": "Vector addition: place vectors tip-to-tail or make a parallelogram, and the sum is the arrow from start to finish.",
    "plain": "Arrows can be added! Chain them nose-to-tail and see where the big arrow lands."
  },
  "derivative": {
    "title": "Derivative Slope Sandbox",
    "concept": "Derivative: the derivative of a curve at a point is the slope of the tangent line there — how steep the curve is at that spot.",
    "plain": "Slide the point along the curve and watch the tangent line tilt! Steep climb, flat top, downhill — the slope tells all."
  },
  "regression": {
    "title": "Line Of Best Fit",
    "concept": "Regression: a best-fit line is drawn through scattered data points to show the trend — how one thing changes with another.",
    "plain": "A cloud of dots hides a pattern! Drag the line until it fits the dots just right, like finding the path through the stars."
  }
};
