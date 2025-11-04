 const defaultConfig = {
      main_title: "Interactive Periodic Table",
      subtitle: "Click on any element to explore its properties",
      background_color: "#667eea",
      surface_color: "#ffffff",
      text_color: "#333333",
      primary_action_color: "#764ba2",
      secondary_action_color: "#48dbfb",
      font_family: "Segoe UI",
      font_size: 16
    };

    const elements = [
      {num: 1, symbol: 'H', name: 'Hydrogen', mass: '1.008', category: 'nonmetal', row: 1, col: 1, desc: 'The lightest and most abundant element in the universe. Essential for life and used in fuel cells.', discovered: '1766'},
      {num: 2, symbol: 'He', name: 'Helium', mass: '4.003', category: 'noble-gas', row: 1, col: 18, desc: 'Second lightest element. Used in balloons, diving equipment, and cooling superconducting magnets.', discovered: '1868'},
      {num: 3, symbol: 'Li', name: 'Lithium', mass: '6.941', category: 'alkali-metal', row: 2, col: 1, desc: 'Lightest metal. Used in rechargeable batteries and psychiatric medication.', discovered: '1817'},
      {num: 4, symbol: 'Be', name: 'Beryllium', mass: '9.012', category: 'alkaline-earth', row: 2, col: 2, desc: 'Strong, lightweight metal used in aerospace applications and X-ray windows.', discovered: '1798'},
      {num: 5, symbol: 'B', name: 'Boron', mass: '10.81', category: 'metalloid', row: 2, col: 13, desc: 'Metalloid used in glass, ceramics, and as a semiconductor dopant.', discovered: '1808'},
      {num: 6, symbol: 'C', name: 'Carbon', mass: '12.01', category: 'nonmetal', row: 2, col: 14, desc: 'Basis of all organic life. Forms diamonds, graphite, and fullerenes.', discovered: 'Ancient'},
      {num: 7, symbol: 'N', name: 'Nitrogen', mass: '14.01', category: 'nonmetal', row: 2, col: 15, desc: 'Makes up 78% of Earth\'s atmosphere. Essential for proteins and DNA.', discovered: '1772'},
      {num: 8, symbol: 'O', name: 'Oxygen', mass: '16.00', category: 'nonmetal', row: 2, col: 16, desc: 'Essential for respiration. Most abundant element in Earth\'s crust.', discovered: '1774'},
      {num: 9, symbol: 'F', name: 'Fluorine', mass: '19.00', category: 'halogen', row: 2, col: 17, desc: 'Most reactive element. Used in toothpaste and Teflon production.', discovered: '1886'},
      {num: 10, symbol: 'Ne', name: 'Neon', mass: '20.18', category: 'noble-gas', row: 2, col: 18, desc: 'Produces bright orange-red glow in neon signs and advertising.', discovered: '1898'},
      {num: 11, symbol: 'Na', name: 'Sodium', mass: '22.99', category: 'alkali-metal', row: 3, col: 1, desc: 'Highly reactive metal. Essential electrolyte in biological systems.', discovered: '1807'},
      {num: 12, symbol: 'Mg', name: 'Magnesium', mass: '24.31', category: 'alkaline-earth', row: 3, col: 2, desc: 'Lightweight structural metal. Essential for chlorophyll in plants.', discovered: '1755'},
      {num: 13, symbol: 'Al', name: 'Aluminum', mass: '26.98', category: 'post-transition', row: 3, col: 13, desc: 'Most abundant metal in Earth\'s crust. Used in packaging and construction.', discovered: '1825'},
      {num: 14, symbol: 'Si', name: 'Silicon', mass: '28.09', category: 'metalloid', row: 3, col: 14, desc: 'Second most abundant element in crust. Foundation of computer chips.', discovered: '1824'},
      {num: 15, symbol: 'P', name: 'Phosphorus', mass: '30.97', category: 'nonmetal', row: 3, col: 15, desc: 'Essential for DNA, RNA, and ATP. Used in fertilizers and matches.', discovered: '1669'},
      {num: 16, symbol: 'S', name: 'Sulfur', mass: '32.07', category: 'nonmetal', row: 3, col: 16, desc: 'Yellow nonmetal used in gunpowder, matches, and vulcanizing rubber.', discovered: 'Ancient'},
      {num: 17, symbol: 'Cl', name: 'Chlorine', mass: '35.45', category: 'halogen', row: 3, col: 17, desc: 'Greenish gas used for water purification and bleaching.', discovered: '1774'},
      {num: 18, symbol: 'Ar', name: 'Argon', mass: '39.95', category: 'noble-gas', row: 3, col: 18, desc: 'Inert gas used in welding and light bulbs. Third most abundant gas in air.', discovered: '1894'},
      {num: 19, symbol: 'K', name: 'Potassium', mass: '39.10', category: 'alkali-metal', row: 4, col: 1, desc: 'Soft, silvery metal. Essential electrolyte for nerve and muscle function.', discovered: '1807'},
      {num: 20, symbol: 'Ca', name: 'Calcium', mass: '40.08', category: 'alkaline-earth', row: 4, col: 2, desc: 'Essential for bones and teeth. Fifth most abundant element in crust.', discovered: '1808'},
      {num: 21, symbol: 'Sc', name: 'Scandium', mass: '44.96', category: 'transition-metal', row: 4, col: 3, desc: 'Rare metal used in aerospace alloys and high-intensity lights.', discovered: '1879'},
      {num: 22, symbol: 'Ti', name: 'Titanium', mass: '47.87', category: 'transition-metal', row: 4, col: 4, desc: 'Strong, lightweight, corrosion-resistant. Used in aircraft and implants.', discovered: '1791'},
      {num: 23, symbol: 'V', name: 'Vanadium', mass: '50.94', category: 'transition-metal', row: 4, col: 5, desc: 'Used in steel alloys to increase strength and wear resistance.', discovered: '1801'},
      {num: 24, symbol: 'Cr', name: 'Chromium', mass: '52.00', category: 'transition-metal', row: 4, col: 6, desc: 'Hard, shiny metal used for chrome plating and stainless steel.', discovered: '1797'},
      {num: 25, symbol: 'Mn', name: 'Manganese', mass: '54.94', category: 'transition-metal', row: 4, col: 7, desc: 'Essential for steel production and biological enzyme function.', discovered: '1774'},
      {num: 26, symbol: 'Fe', name: 'Iron', mass: '55.85', category: 'transition-metal', row: 4, col: 8, desc: 'Most used metal. Essential for hemoglobin and Earth\'s core.', discovered: 'Ancient'},
      {num: 27, symbol: 'Co', name: 'Cobalt', mass: '58.93', category: 'transition-metal', row: 4, col: 9, desc: 'Magnetic metal used in batteries, alloys, and blue pigments.', discovered: '1735'},
      {num: 28, symbol: 'Ni', name: 'Nickel', mass: '58.69', category: 'transition-metal', row: 4, col: 10, desc: 'Corrosion-resistant metal used in coins, batteries, and stainless steel.', discovered: '1751'},
      {num: 29, symbol: 'Cu', name: 'Copper', mass: '63.55', category: 'transition-metal', row: 4, col: 11, desc: 'Excellent conductor used in wiring, plumbing, and electronics.', discovered: 'Ancient'},
      {num: 30, symbol: 'Zn', name: 'Zinc', mass: '65.38', category: 'transition-metal', row: 4, col: 12, desc: 'Used for galvanizing steel and in batteries. Essential nutrient.', discovered: '1746'},
      {num: 31, symbol: 'Ga', name: 'Gallium', mass: '69.72', category: 'post-transition', row: 4, col: 13, desc: 'Melts just above room temperature. Used in semiconductors and LEDs.', discovered: '1875'},
      {num: 32, symbol: 'Ge', name: 'Germanium', mass: '72.63', category: 'metalloid', row: 4, col: 14, desc: 'Semiconductor used in fiber optics and infrared optics.', discovered: '1886'},
      {num: 33, symbol: 'As', name: 'Arsenic', mass: '74.92', category: 'metalloid', row: 4, col: 15, desc: 'Toxic metalloid used in semiconductors and wood preservatives.', discovered: 'Ancient'},
      {num: 34, symbol: 'Se', name: 'Selenium', mass: '78.97', category: 'nonmetal', row: 4, col: 16, desc: 'Used in photocopiers, solar cells, and as a dietary supplement.', discovered: '1817'},
      {num: 35, symbol: 'Br', name: 'Bromine', mass: '79.90', category: 'halogen', row: 4, col: 17, desc: 'Only nonmetal liquid at room temperature. Used in flame retardants.', discovered: '1826'},
      {num: 36, symbol: 'Kr', name: 'Krypton', mass: '83.80', category: 'noble-gas', row: 4, col: 18, desc: 'Used in high-performance light bulbs and lasers.', discovered: '1898'},
      {num: 37, symbol: 'Rb', name: 'Rubidium', mass: '85.47', category: 'alkali-metal', row: 5, col: 1, desc: 'Soft, silvery metal used in atomic clocks and photocells.', discovered: '1861'},
      {num: 38, symbol: 'Sr', name: 'Strontium', mass: '87.62', category: 'alkaline-earth', row: 5, col: 2, desc: 'Used in fireworks for red color and in certain medical applications.', discovered: '1790'},
      {num: 39, symbol: 'Y', name: 'Yttrium', mass: '88.91', category: 'transition-metal', row: 5, col: 3, desc: 'Used in LED and camera lenses, superconductors, and cancer treatment.', discovered: '1794'},
      {num: 40, symbol: 'Zr', name: 'Zirconium', mass: '91.22', category: 'transition-metal', row: 5, col: 4, desc: 'Corrosion-resistant metal used in nuclear reactors and jewelry.', discovered: '1789'},
      {num: 41, symbol: 'Nb', name: 'Niobium', mass: '92.91', category: 'transition-metal', row: 5, col: 5, desc: 'Used in superconducting magnets and high-grade steel alloys.', discovered: '1801'},
      {num: 42, symbol: 'Mo', name: 'Molybdenum', mass: '95.95', category: 'transition-metal', row: 5, col: 6, desc: 'Used in high-strength steel alloys and as a catalyst.', discovered: '1778'},
      {num: 43, symbol: 'Tc', name: 'Technetium', mass: '98', category: 'transition-metal', row: 5, col: 7, desc: 'First artificially produced element. Used in medical imaging.', discovered: '1937'},
      {num: 44, symbol: 'Ru', name: 'Ruthenium', mass: '101.1', category: 'transition-metal', row: 5, col: 8, desc: 'Rare metal used in electronics and as a catalyst.', discovered: '1844'},
      {num: 45, symbol: 'Rh', name: 'Rhodium', mass: '102.9', category: 'transition-metal', row: 5, col: 9, desc: 'Highly reflective metal used in catalytic converters and mirrors.', discovered: '1803'},
      {num: 46, symbol: 'Pd', name: 'Palladium', mass: '106.4', category: 'transition-metal', row: 5, col: 10, desc: 'Precious metal used in catalytic converters and electronics.', discovered: '1803'},
      {num: 47, symbol: 'Ag', name: 'Silver', mass: '107.9', category: 'transition-metal', row: 5, col: 11, desc: 'Best conductor of electricity. Used in jewelry, coins, and electronics.', discovered: 'Ancient'},
      {num: 48, symbol: 'Cd', name: 'Cadmium', mass: '112.4', category: 'transition-metal', row: 5, col: 12, desc: 'Toxic metal used in batteries and pigments.', discovered: '1817'},
      {num: 49, symbol: 'In', name: 'Indium', mass: '114.8', category: 'post-transition', row: 5, col: 13, desc: 'Soft metal used in touchscreens and LCD displays.', discovered: '1863'},
      {num: 50, symbol: 'Sn', name: 'Tin', mass: '118.7', category: 'post-transition', row: 5, col: 14, desc: 'Used in solder, bronze alloys, and tin cans.', discovered: 'Ancient'},
      {num: 51, symbol: 'Sb', name: 'Antimony', mass: '121.8', category: 'metalloid', row: 5, col: 15, desc: 'Used in flame retardants, batteries, and semiconductors.', discovered: 'Ancient'},
      {num: 52, symbol: 'Te', name: 'Tellurium', mass: '127.6', category: 'metalloid', row: 5, col: 16, desc: 'Used in solar panels, thermoelectric devices, and steel alloys.', discovered: '1782'},
      {num: 53, symbol: 'I', name: 'Iodine', mass: '126.9', category: 'halogen', row: 5, col: 17, desc: 'Essential for thyroid function. Used in disinfectants and dyes.', discovered: '1811'},
      {num: 54, symbol: 'Xe', name: 'Xenon', mass: '131.3', category: 'noble-gas', row: 5, col: 18, desc: 'Used in high-intensity lamps, anesthesia, and ion propulsion.', discovered: '1898'},
      {num: 55, symbol: 'Cs', name: 'Cesium', mass: '132.9', category: 'alkali-metal', row: 6, col: 1, desc: 'Most reactive metal. Used in atomic clocks and photoelectric cells.', discovered: '1860'},
      {num: 56, symbol: 'Ba', name: 'Barium', mass: '137.3', category: 'alkaline-earth', row: 6, col: 2, desc: 'Used in medical imaging, fireworks, and drilling fluids.', discovered: '1808'},
      {num: 72, symbol: 'Hf', name: 'Hafnium', mass: '178.5', category: 'transition-metal', row: 6, col: 4, desc: 'Used in nuclear reactor control rods and superalloys.', discovered: '1923'},
      {num: 73, symbol: 'Ta', name: 'Tantalum', mass: '180.9', category: 'transition-metal', row: 6, col: 5, desc: 'Highly corrosion-resistant. Used in capacitors and surgical implants.', discovered: '1802'},
      {num: 74, symbol: 'W', name: 'Tungsten', mass: '183.8', category: 'transition-metal', row: 6, col: 6, desc: 'Highest melting point of all metals. Used in light bulb filaments.', discovered: '1783'},
      {num: 75, symbol: 'Re', name: 'Rhenium', mass: '186.2', category: 'transition-metal', row: 6, col: 7, desc: 'One of rarest elements. Used in jet engine parts and catalysts.', discovered: '1925'},
      {num: 76, symbol: 'Os', name: 'Osmium', mass: '190.2', category: 'transition-metal', row: 6, col: 8, desc: 'Densest naturally occurring element. Used in fountain pen tips.', discovered: '1803'},
      {num: 77, symbol: 'Ir', name: 'Iridium', mass: '192.2', category: 'transition-metal', row: 6, col: 9, desc: 'Second densest element. Used in spark plugs and crucibles.', discovered: '1803'},
      {num: 78, symbol: 'Pt', name: 'Platinum', mass: '195.1', category: 'transition-metal', row: 6, col: 10, desc: 'Precious metal used in catalytic converters and jewelry.', discovered: '1735'},
      {num: 79, symbol: 'Au', name: 'Gold', mass: '197.0', category: 'transition-metal', row: 6, col: 11, desc: 'Precious metal prized for jewelry, electronics, and currency.', discovered: 'Ancient'},
      {num: 80, symbol: 'Hg', name: 'Mercury', mass: '200.6', category: 'transition-metal', row: 6, col: 12, desc: 'Only metal liquid at room temperature. Used in thermometers.', discovered: 'Ancient'},
      {num: 81, symbol: 'Tl', name: 'Thallium', mass: '204.4', category: 'post-transition', row: 6, col: 13, desc: 'Toxic metal used in electronics and medical imaging.', discovered: '1861'},
      {num: 82, symbol: 'Pb', name: 'Lead', mass: '207.2', category: 'post-transition', row: 6, col: 14, desc: 'Dense, soft metal. Historically used in pipes and paint.', discovered: 'Ancient'},
      {num: 83, symbol: 'Bi', name: 'Bismuth', mass: '209.0', category: 'post-transition', row: 6, col: 15, desc: 'Used in cosmetics, alloys, and stomach remedies.', discovered: '1753'},
      {num: 84, symbol: 'Po', name: 'Polonium', mass: '209', category: 'metalloid', row: 6, col: 16, desc: 'Highly radioactive. Used in antistatic devices and space heaters.', discovered: '1898'},
      {num: 85, symbol: 'At', name: 'Astatine', mass: '210', category: 'halogen', row: 6, col: 17, desc: 'Rarest naturally occurring element. Highly radioactive.', discovered: '1940'},
      {num: 86, symbol: 'Rn', name: 'Radon', mass: '222', category: 'noble-gas', row: 6, col: 18, desc: 'Radioactive gas that can accumulate in buildings.', discovered: '1900'},
      {num: 87, symbol: 'Fr', name: 'Francium', mass: '223', category: 'alkali-metal', row: 7, col: 1, desc: 'Second rarest naturally occurring element. Highly radioactive.', discovered: '1939'},
      {num: 88, symbol: 'Ra', name: 'Radium', mass: '226', category: 'alkaline-earth', row: 7, col: 2, desc: 'Highly radioactive. Once used in luminous paints.', discovered: '1898'},
      {num: 104, symbol: 'Rf', name: 'Rutherfordium', mass: '267', category: 'transition-metal', row: 7, col: 4, desc: 'Synthetic element with no practical applications yet.', discovered: '1969'},
      {num: 105, symbol: 'Db', name: 'Dubnium', mass: '268', category: 'transition-metal', row: 7, col: 5, desc: 'Synthetic element used only in scientific research.', discovered: '1970'},
      {num: 106, symbol: 'Sg', name: 'Seaborgium', mass: '269', category: 'transition-metal', row: 7, col: 6, desc: 'Synthetic element named after Glenn Seaborg.', discovered: '1974'},
      {num: 107, symbol: 'Bh', name: 'Bohrium', mass: '270', category: 'transition-metal', row: 7, col: 7, desc: 'Synthetic element named after Niels Bohr.', discovered: '1981'},
      {num: 108, symbol: 'Hs', name: 'Hassium', mass: '277', category: 'transition-metal', row: 7, col: 8, desc: 'Synthetic element named after the German state of Hesse.', discovered: '1984'},
      {num: 109, symbol: 'Mt', name: 'Meitnerium', mass: '278', category: 'transition-metal', row: 7, col: 9, desc: 'Synthetic element named after Lise Meitner.', discovered: '1982'},
      {num: 110, symbol: 'Ds', name: 'Darmstadtium', mass: '281', category: 'transition-metal', row: 7, col: 10, desc: 'Synthetic element named after Darmstadt, Germany.', discovered: '1994'},
      {num: 111, symbol: 'Rg', name: 'Roentgenium', mass: '282', category: 'transition-metal', row: 7, col: 11, desc: 'Synthetic element named after Wilhelm Röntgen.', discovered: '1994'},
      {num: 112, symbol: 'Cn', name: 'Copernicium', mass: '285', category: 'transition-metal', row: 7, col: 12, desc: 'Synthetic element named after Nicolaus Copernicus.', discovered: '1996'},
      {num: 113, symbol: 'Nh', name: 'Nihonium', mass: '286', category: 'post-transition', row: 7, col: 13, desc: 'Synthetic element named after Japan (Nihon).', discovered: '2004'},
      {num: 114, symbol: 'Fl', name: 'Flerovium', mass: '289', category: 'post-transition', row: 7, col: 14, desc: 'Synthetic element named after Georgy Flyorov.', discovered: '1999'},
      {num: 115, symbol: 'Mc', name: 'Moscovium', mass: '290', category: 'post-transition', row: 7, col: 15, desc: 'Synthetic element named after Moscow, Russia.', discovered: '2003'},
      {num: 116, symbol: 'Lv', name: 'Livermorium', mass: '293', category: 'post-transition', row: 7, col: 16, desc: 'Synthetic element named after Livermore, California.', discovered: '2000'},
      {num: 117, symbol: 'Ts', name: 'Tennessine', mass: '294', category: 'halogen', row: 7, col: 17, desc: 'Synthetic element named after Tennessee, USA.', discovered: '2010'},
      {num: 118, symbol: 'Og', name: 'Oganesson', mass: '294', category: 'noble-gas', row: 7, col: 18, desc: 'Heaviest known element. Named after Yuri Oganessian.', discovered: '2002'}
    ];

    function renderPeriodicTable() {
      const table = document.getElementById('periodic-table');
      table.innerHTML = '';

      // Create all elements with proper positioning
      elements.forEach(element => {
        const div = document.createElement('div');
        div.className = `element ${element.category}`;
        div.style.gridColumn = element.col;
        div.style.gridRow = element.row;
        div.style.animationDelay = `${(element.row * 0.05 + element.col * 0.02)}s`;
        
        div.innerHTML = `
          <div class="electron-orbits">
            <div class="orbit orbit-1">
              <div class="electron electron-1"></div>
            </div>
            <div class="orbit orbit-2">
              <div class="electron electron-2"></div>
            </div>
            <div class="orbit orbit-3">
              <div class="electron electron-3"></div>
            </div>
            <div class="nucleus"></div>
          </div>
          <div class="element-tooltip">
            <span class="tooltip-line"><span class="tooltip-label">Name:</span> ${element.name}</span>
            <span class="tooltip-line"><span class="tooltip-label">Mass:</span> ${element.mass}</span>
            <span class="tooltip-line"><span class="tooltip-label">Category:</span> ${element.category.replace('-', ' ')}</span>
            <span class="tooltip-line"><span class="tooltip-label">Discovered:</span> ${element.discovered}</span>
          </div>
          <div class="atomic-number">${element.num}</div>
          <div class="symbol">${element.symbol}</div>
          <div class="name">${element.name}</div>
          <div class="mass">${element.mass}</div>
        `;
        
        div.addEventListener('click', () => showModal(element));
        table.appendChild(div);
      });

      // Add lanthanides and actinides rows
      const lanthanides = [
        {num: 57, symbol: 'La', name: 'Lanthanum', mass: '138.9', category: 'lanthanide', row: 8, col: 4, desc: 'Soft, silvery metal used in camera lenses and lighting.', discovered: '1839'},
        {num: 58, symbol: 'Ce', name: 'Cerium', mass: '140.1', category: 'lanthanide', row: 8, col: 5, desc: 'Most abundant rare earth element. Used in catalysts and glass.', discovered: '1803'},
        {num: 59, symbol: 'Pr', name: 'Praseodymium', mass: '140.9', category: 'lanthanide', row: 8, col: 6, desc: 'Used in magnets, lasers, and aircraft engines.', discovered: '1885'},
        {num: 60, symbol: 'Nd', name: 'Neodymium', mass: '144.2', category: 'lanthanide', row: 8, col: 7, desc: 'Used in powerful permanent magnets and lasers.', discovered: '1885'},
        {num: 61, symbol: 'Pm', name: 'Promethium', mass: '145', category: 'lanthanide', row: 8, col: 8, desc: 'Radioactive element used in nuclear batteries.', discovered: '1945'},
        {num: 62, symbol: 'Sm', name: 'Samarium', mass: '150.4', category: 'lanthanide', row: 8, col: 9, desc: 'Used in magnets and cancer treatment.', discovered: '1879'},
        {num: 63, symbol: 'Eu', name: 'Europium', mass: '152.0', category: 'lanthanide', row: 8, col: 10, desc: 'Used in red phosphors for TV screens and LEDs.', discovered: '1901'},
        {num: 64, symbol: 'Gd', name: 'Gadolinium', mass: '157.3', category: 'lanthanide', row: 8, col: 11, desc: 'Used in MRI contrast agents and neutron capture.', discovered: '1880'},
        {num: 65, symbol: 'Tb', name: 'Terbium', mass: '158.9', category: 'lanthanide', row: 8, col: 12, desc: 'Used in green phosphors and solid-state devices.', discovered: '1843'},
        {num: 66, symbol: 'Dy', name: 'Dysprosium', mass: '162.5', category: 'lanthanide', row: 8, col: 13, desc: 'Used in high-performance magnets and lasers.', discovered: '1886'},
        {num: 67, symbol: 'Ho', name: 'Holmium', mass: '164.9', category: 'lanthanide', row: 8, col: 14, desc: 'Used in lasers and magnetic field applications.', discovered: '1878'},
        {num: 68, symbol: 'Er', name: 'Erbium', mass: '167.3', category: 'lanthanide', row: 8, col: 15, desc: 'Used in fiber optic amplifiers and lasers.', discovered: '1843'},
        {num: 69, symbol: 'Tm', name: 'Thulium', mass: '168.9', category: 'lanthanide', row: 8, col: 16, desc: 'Rarest rare earth element. Used in medical X-rays.', discovered: '1879'},
        {num: 70, symbol: 'Yb', name: 'Ytterbium', mass: '173.1', category: 'lanthanide', row: 8, col: 17, desc: 'Used in stainless steel and stress gauges.', discovered: '1878'},
        {num: 71, symbol: 'Lu', name: 'Lutetium', mass: '175.0', category: 'lanthanide', row: 8, col: 18, desc: 'Hardest and densest lanthanide. Used in medical imaging.', discovered: '1907'}
      ];

      const actinides = [
        {num: 89, symbol: 'Ac', name: 'Actinium', mass: '227', category: 'actinide', row: 9, col: 4, desc: 'Radioactive element used in neutron sources.', discovered: '1899'},
        {num: 90, symbol: 'Th', name: 'Thorium', mass: '232.0', category: 'actinide', row: 9, col: 5, desc: 'Radioactive metal used in nuclear reactors and welding.', discovered: '1828'},
        {num: 91, symbol: 'Pa', name: 'Protactinium', mass: '231.0', category: 'actinide', row: 9, col: 6, desc: 'Rare radioactive element with no practical uses.', discovered: '1913'},
        {num: 92, symbol: 'U', name: 'Uranium', mass: '238.0', category: 'actinide', row: 9, col: 7, desc: 'Heavy radioactive metal used in nuclear power and weapons.', discovered: '1789'},
        {num: 93, symbol: 'Np', name: 'Neptunium', mass: '237', category: 'actinide', row: 9, col: 8, desc: 'First transuranium element. Used in neutron detectors.', discovered: '1940'},
        {num: 94, symbol: 'Pu', name: 'Plutonium', mass: '244', category: 'actinide', row: 9, col: 9, desc: 'Radioactive metal used in nuclear weapons and reactors.', discovered: '1940'},
        {num: 95, symbol: 'Am', name: 'Americium', mass: '243', category: 'actinide', row: 9, col: 10, desc: 'Used in smoke detectors and industrial gauges.', discovered: '1944'},
        {num: 96, symbol: 'Cm', name: 'Curium', mass: '247', category: 'actinide', row: 9, col: 11, desc: 'Used in space missions and medical applications.', discovered: '1944'},
        {num: 97, symbol: 'Bk', name: 'Berkelium', mass: '247', category: 'actinide', row: 9, col: 12, desc: 'Synthetic element used only in scientific research.', discovered: '1949'},
        {num: 98, symbol: 'Cf', name: 'Californium', mass: '251', category: 'actinide', row: 9, col: 13, desc: 'Used in neutron sources and cancer treatment.', discovered: '1950'},
        {num: 99, symbol: 'Es', name: 'Einsteinium', mass: '252', category: 'actinide', row: 9, col: 14, desc: 'Synthetic element used only in scientific research.', discovered: '1952'},
        {num: 100, symbol: 'Fm', name: 'Fermium', mass: '257', category: 'actinide', row: 9, col: 15, desc: 'Synthetic element with no practical applications.', discovered: '1952'},
        {num: 101, symbol: 'Md', name: 'Mendelevium', mass: '258', category: 'actinide', row: 9, col: 16, desc: 'Synthetic element named after Dmitri Mendeleev.', discovered: '1955'},
        {num: 102, symbol: 'No', name: 'Nobelium', mass: '259', category: 'actinide', row: 9, col: 17, desc: 'Synthetic element named after Alfred Nobel.', discovered: '1957'},
        {num: 103, symbol: 'Lr', name: 'Lawrencium', mass: '266', category: 'actinide', row: 9, col: 18, desc: 'Synthetic element named after Ernest Lawrence.', discovered: '1961'}
      ];

      // Add lanthanides and actinides
      [...lanthanides, ...actinides].forEach(element => {
        const div = document.createElement('div');
        div.className = `element ${element.category}`;
        div.style.gridColumn = element.col;
        div.style.gridRow = element.row;
        div.style.animationDelay = `${(element.row * 0.05 + element.col * 0.02)}s`;
        
        div.innerHTML = `
          <div class="electron-orbits">
            <div class="orbit orbit-1">
              <div class="electron electron-1"></div>
            </div>
            <div class="orbit orbit-2">
              <div class="electron electron-2"></div>
            </div>
            <div class="orbit orbit-3">
              <div class="electron electron-3"></div>
            </div>
            <div class="nucleus"></div>
          </div>
          <div class="element-tooltip">
            <span class="tooltip-line"><span class="tooltip-label">Name:</span> ${element.name}</span>
            <span class="tooltip-line"><span class="tooltip-label">Mass:</span> ${element.mass}</span>
            <span class="tooltip-line"><span class="tooltip-label">Category:</span> ${element.category.replace('-', ' ')}</span>
            <span class="tooltip-line"><span class="tooltip-label">Discovered:</span> ${element.discovered}</span>
          </div>
          <div class="atomic-number">${element.num}</div>
          <div class="symbol">${element.symbol}</div>
          <div class="name">${element.name}</div>
          <div class="mass">${element.mass}</div>
        `;
        
        div.addEventListener('click', () => showModal(element));
        table.appendChild(div);
      });
    }

    function showModal(element) {
      const modal = document.getElementById('modal');
      const modalSymbol = document.getElementById('modal-symbol');
      const modalBody = document.getElementById('modal-body');
      
      // Add click effect animation to the clicked element
      const clickedElement = event.target.closest('.element');
      if (clickedElement) {
        clickedElement.style.animation = 'elementClick 0.3s ease-out';
        setTimeout(() => {
          clickedElement.style.animation = '';
        }, 300);
      }
      
      modalSymbol.textContent = element.symbol;
      modalSymbol.style.animation = 'symbolPulse 1s ease-in-out infinite';
      
      modalBody.innerHTML = `
        <div class="element-info-grid">
          <div class="info-item">
            <span class="info-label">Name:</span> 
            <span class="info-value">${element.name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Atomic Number:</span> 
            <span class="info-value">${element.num}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Atomic Mass:</span> 
            <span class="info-value">${element.mass}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Category:</span> 
            <span class="info-value category-badge ${element.category}">${element.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Discovered:</span> 
            <span class="info-value">${element.discovered}</span>
          </div>
          <div class="info-item full-width">
            <span class="info-label">Description:</span> 
            <span class="info-value">${element.desc}</span>
          </div>
        </div>
      `;
      
      modal.style.display = 'block';
    }

    function closeModal() {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    }

    document.getElementById('close-btn').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target.id === 'modal') {
        closeModal();
      }
    });

    async function onConfigChange(config) {
      const customFont = config.font_family || defaultConfig.font_family;
      const baseSize = config.font_size || defaultConfig.font_size;
      const baseFontStack = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';

      document.getElementById('main-title').textContent = config.main_title || defaultConfig.main_title;
      document.getElementById('subtitle').textContent = config.subtitle || defaultConfig.subtitle;

      document.getElementById('main-title').style.fontFamily = `${customFont}, ${baseFontStack}`;
      document.getElementById('subtitle').style.fontFamily = `${customFont}, ${baseFontStack}`;
      
      document.getElementById('main-title').style.fontSize = `${baseSize * 3}px`;
      document.getElementById('subtitle').style.fontSize = `${baseSize * 1.125}px`;
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["main_title", config.main_title || defaultConfig.main_title],
          ["subtitle", config.subtitle || defaultConfig.subtitle]
        ])
      });
    }

    function createBackgroundParticles() {
      const particleContainer = document.getElementById('background-particles');
      const gasTypes = ['hydrogen', 'helium', 'oxygen', 'nitrogen', 'carbon'];
      
      // Create 50 particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const gasType = gasTypes[Math.floor(Math.random() * gasTypes.length)];
        
        particle.className = `gas-particle ${gasType}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        particleContainer.appendChild(particle);
      }
    }

    function setupCategoryFilters() {
      const legendItems = document.querySelectorAll('.legend-item');
      let activeCategory = 'all';

      legendItems.forEach(item => {
        item.addEventListener('click', () => {
          const category = item.dataset.category;
          
          // Remove active class from all items
          legendItems.forEach(legendItem => {
            legendItem.classList.remove('active');
          });
          
          // Add active class to clicked item
          item.classList.add('active');
          
          // Filter elements
          filterElements(category);
          activeCategory = category;
        });
      });

      // Set "Show All" as active by default
      document.getElementById('show-all').classList.add('active');
    }

    function filterElements(category) {
      const allElements = document.querySelectorAll('.element');
      
      allElements.forEach(element => {
        if (category === 'all') {
          element.classList.remove('filtered-out');
        } else {
          if (element.classList.contains(category)) {
            element.classList.remove('filtered-out');
          } else {
            element.classList.add('filtered-out');
          }
        }
      });
    }

    renderPeriodicTable();
    createBackgroundParticles();
    setupCategoryFilters();

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'99914fc2e5e93366',t:'MTc2MjIyOTk1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();