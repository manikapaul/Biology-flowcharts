var json = {
        	"id": "Metazoa",
        	"data": {
    	    		"Group type" : "Superphylum",
    	    		"Common name": "Animals",
    	    		"Unique traits": "heterotrophic; movement; multicellularity"
        		},
        	"children": [{
        		"id": "Porifera",
        		"data":{
        			"Group type": "Phylum (within superphylum Parazoa)",
        			"Common name": "Sponges",
        			"Unique traits" : "1 germ layer",
        			"Cell organization": "cell level; acoelomate; 1 germ layer",
        			"Digestive": "suspension feeder; GVC; chaonocytes - filtration; amoebocytes - skeleton and food distribution",
        			"Respiratory": "GVC (chaonocyte circulation) through canals",
        			"Circulatory": "GVC (chaonocyte circulation) through canals",
        			"Skeleton and locomotion": "Amoebocyte secretion; varies from soft to hard; mostly sessile",
        			"Excretory": "cellular basis",
        			"Appearance": "No cephalization/symmetry",
        			"Notes": "In tank/dead specimens"
        			}
        	},{
        		"id": "Eumetazoa",
        		"data":{
        			"Group type": "Superphylum",
        			"Common name": "True animals",
        			"Unique traits": "tissue level of organization"
        		},
        		"children": [{
        			"id": "Cnidaria",
        			"data":{
        				"Group type": "Phylum (within superphylum Radiata)",
        				"Common name": "Jellyfish; Coral; Anemone; Hydra",
        				"Unique traits": "2 germ layers; Mesoglea; Cnidocytes",
        				"Cellular organization": "True tissues, but no organs",
        				"Skeleton/locomotion": "Mesoglea for muscle attachment",
        				"Nervous system":"Nerve net; no cephalization",
        				"Notes":"Polyp (sessile) vs. medusa (free-swimming) body plan"
        			},
        			"children" : [{
        				"id": "Hydrazoa",
        				"data":{
        					"Group type": "Class",
        					"Common name": "Hydra; some corals"
        					},
        				"children":[{
        					"id": "Hydra",
        					"data": {
        						"Group type": "Example",
        						"Parts":"Basal disk: Columnar epithelium; Testes oral to ovaries (bumps on body)",
        						"Reproduction":"Both dioecious and monecious"
        						
        					}
        				}]
        			},{
        				"id": "Anthozoa",
        				"data": {
        					"Group type":"Class",
        					"Common name": "Corals; Anemones",
        					"Notes": "Some in tank; Dead corals"
        				}
        			},{
        				"id": "Cubozoa",
        				"data": {
        					"Group type":"Class",
        					"Common name": "Box jellyfish; Sea wasps"
        				}
        			},{
        				"id": "Scyphozoa",
        				"data": {
        					"Group type":"Class",
        					"Common name": "Jellyfish; Sea nettles"
        				}
        			}]
        		},{
        			id : "Bilateria",
        			"data": {
        				"Group type": "Superphylum",
        				"Unique traits": "3 germ layers; Bilateral symmetry"
        			},
        			children: [{
        				id: "Deuterostomes",
        				data : {
        					"Group type": "Superphylum",
        					"Unique traits": "Radial embryonic cleavage; Indeterminate development (twins); Blastopore -> anus; Coelom from outpocketing of archenteron (enterocoelous)"
        				},
        				children: [{
        					id: "Echinoderms",
        					data: {
        						"Group type": "Phylum",
        						"Unique traits": "Water vascular system; Coelomate with radial symmetry; Teeth; Exclusively marine; Bilateral larvae",
        						"Something fun":"Since the larval lophophore of ACTINOTROCHA is supplied; With a pair of \'collar\' coelomes, these can scarcely be denied; To former Echinozoic fry, which hydraulic pressure needed; To support their lateral armlets ere a skeleton succeeded.; <a href=http://www.jstor.org/stable/1541253>Source</a>"
        					},
        					children:[{
        						id: "Asteroidea",
        						data:{
        							"Group type":"Class",
        							"Common name":"Starfish"
        						},
        						children: [{
        							id: "Starfish",
        							data:{
        								"Group type":"Example",
        								"Circulation":"Madreporite; stone canal; ring canal; radial canal; lateral canal; ampullae/tube feet; Open circulatory system/no pigment",
        								"Skeleton/locomotion":"Endoskeleton (calcareous plates with living cells)",
        								"Skin": "Spines -- white; dermal branchiae (gas exchange -- brown); pedicellariae (defense -- white, pac-man)",
        								"Digestion":"Mouth; Cardiac stomach (everted to bring in food); Pyloric stomach (pentagon); Digestive/hepatic/pyloric caeca (brown in arms); intestine; rectal caeca (brown, worm-like); anus",
        								"Reproduction":"Fragmentation and regeneration; Dioecious; Gonads oral to digestive caeca; Male: White-clear; Female: Salmon"
        							}
        						}]
        					},{
        						id: "Echinoidea",
        						data:{
        							"Group type":"Class",
        							"Common name":"Urchins and sand dollars"
        						},
        						children:[{
        							id:"Sea urchin",
        							data:{
        								"Group type":"Example (development)",
        								"Egg":"Fertilization experiment; Jelly coat - even spacing between visible eggs; Upon fertilization a clear fert. membrane forms",
        								"Larvae":"Bilateral symmetry; Cilia for movement"
        							}
        						}]
        					},{
        						id: "Holothuroidea",
        						data:{
        							"Group type":"Class",
        							"Common name":"Sea cucumber",
        							"Notes":"Distinguish from nudibranches by sea cucumber\'s spines"
        						}
        					},{
        						id: "Ophiuroidea",
        						data:{
        							"Group type":"Class",
        							"Common name":"Brittle star"
        						}
        					},{
        						id: "Crinoidea",
        						data:{
        							"Group type":"Class",
        							"Common name":"Sea lily, feather star",
        							"Notes":"Distinguish from tubeworms by tubeworms' stalk."
        						}
        					}]
        				},{
        					id: "Chordates",
        					data: {
        						"Group type": "Phylum",
        						"Unique traits": "Notochord; Dorsal hollow nerve cord (=/= notochord!); Pharyngeal gill clefts; Post-anal tail; Oblique muscles",
							"Notes":"Tentative cladogram: this cladogram presents a flat arrangement of some of these clades.; <img src=\"Chordate_clades.png\" height=295 width=400/>; <a href=\"http://faculty.clintoncc.suny.edu/faculty/michael.gregory/files/bio%20102/bio%20102%20lectures/animal%20diversity/deuterostomes/deuterostomes.htm\">Source</a>",
        					},
						children:[{
							id:"Cephalochordata",
							data:{
								"Group type":"Subphylum",
							},
							children:[{
								id:"Lancelet",
								data:{
									"Group type":"Example",
									"Notes":"Slides; Adult has all chordate characteristics; Body segmentation",
									"Image":"<img src=\"lancelet.jpg\"/>; <a href=\"http://students.cis.uab.edu/chase29/lancelets.html\">Source</a>",
								}
							}]
						},{
							id:"Urochordata",
							data:{
								"Group type":"Subphylum",
							},
							children:[{
								id:"Tunicate",
								data:{
									"Group type":"Example",
									"Common name":"Sea squirt",
									"Unique traits":"Tunic = thick outer layer",
									"Notes":"In tank; bright orange"
								}
							}]
						},{
							id:"Vertebrata",
							data:{
								"Group type":"Subphylum (within subphylum Craniata, with heads)",
								"Unique traits":"Backbone/spinal column",
								"Notes":"Includes sharks (jaws) and lampreys (teeth/no jaws), which do not have bones but cartilage"
							},
							children:[{
								id:"Amphibia",
								data:{
									"Group type":"Class (in superclass Tetrapoda)",
									"Common name":"Frogs; Toads; Salamanders; Newts",
									"Unique traits":"Wet skin; External fertilization; No shell on egg"
								},
								children:[{
									id:"Xenopus",
									data:{
										"Group type":"Example (development)",
										"Common name":"Frog",
										"Ovum":"Animal pole (dark); Vegetal pole (yellow); Bright spot on animal pole = nucleus",
										"2/4 cell":"HOLOBLASTIC; Vertical (through animal & vegetal pole)",
										"8 cell morula":"3rd cleavage plane horizontal; Animal pole cells smaller than vegetal",
										"Blastula":"128 cell with blastocoel; Again, animal smaller than vegetal cells.",
										"Gastrula":"Yolk plug + blastopore (invaginating cells) vegetal; Crescent blastopore slide",
										"Neurula":"Formation of notochord; Folded inward asymmetrically; Larger fold goes to brain; Notochord ventral to spinal cord on slides", 
										"Notes":"Not truly indeterminate cleavage - heterogeneous cytoplasm"
									}
								}]
							},{
								id:"Aves/Reptilia",
								data:{
									"Group type":"Class (Aves within class Reptilia)",
									"Common name":"Birds/Reptiles",
									"Unique traits":"Dry skin with dry-shelled eggs; Reptile - skinlike shell; Bird - hard shell; Bird - endothermy + feathers; Amniote (like Mammalia)",
									
								},
								children:[{
									id:"Chick",
									data:{
										"Group type":"Example (development)",
										"Image":"<img src=chickegg.jpg/>",
										"Extraembryonic membranes":"MEROBLASTIC (primitive streak, large yolk); Amnion for cushioning; Chorion/serosa eventually fuses with allantois; Allantois stores uric acid + gas exchange; Yolk sac - vascularized, nutrients",
										"Slides":"Somites - off-center dorsal dark things, form vertebrae; Notochord - solid dark circle ventral to spine; Dorsal spinal cord - Hollow dorsal tube; Midgut - medial ventral, connects to yolk sac"
									}
								}]
							},{
								id:"Mammalia",
								data:{
									"Group type":"Class",
									"Unique traits":"Amniote (like Reptilia); Endothermy (convergent ev. with birds); Placenta; Hair; Milk !!!; Usually live birth + long time to leave nest"
								},
								children:[{
									id:"Rat",
									data:{
										"Group type":"Example",
										"The Neck":"Salivary glands: submaxillary (large, medial), parotid (small, near submax., use duct); Lymph nodes (4): small spherical yellow, filter interstitial fluid; Lachrymal gland: large, dark, on side of neck; Facial nerve: dorsal to parotid duct",
										"Thoracic cavity":"Diaphragm - skinlike muscle posterior to lungs; Falciform ligament - white, attach liver to abdominal wall; Xiphoid process - cartilage at base of sternum; Heart: r. atr. dark lobe; Thymus - pink, anterior to heart; Trachea - rings of cartilage = held open; Larynx - enlargement of the trachea; Thyroid - lateral to larynx; Lungs - large and pink",
										"Respiration":"Laryngopharynx; Epiglottis; Larynx; Trachea; Lungs (bronchi)",
										"Circulation":"See sheep for a larger heart",
										"Digestive system":"Many parts suspended by mesentery (connective); Mouth (amylase - sugar breakdown); Pharynx (oro-, naso-, laryngo-); Esophagus (dorsal to trachea, usually collapsed); Cardiac sphincter; Stomach (storage + phys/chem treatment, HCl + proteases); spleen - red flat finger-shaped near stomach; pyloric sphincter; Small intestine: duodenum, jejunum, ileum - Dow Jones Industrial; liver - large dark red multi-lobed anterior, bile, glycogen; pancreas - white/yellow stuff packed against lower stomach, x-ases + HCO3; Caecum - large dark posterior right, bacteria; large intestine (water reabsorption)",
										"Excretory system":"Kidneys: dorsal wall; Kidney cortex - outer layer with glomeruli; Kidney medulla - inner layer, collecting tubules; Adrenal gland - medial + cranial to kidney, epinephrine; Renal artery/vein to kidney; Nephron = functional unit; Exit via ureter; Urinary bladder; Exit body through urethra",
										"Reproduction":"Dorsal to digestive tract; <i>Male</i>:; Testes w/seminiferous tubules in scrotum; Caput (anterior); Cauda epididymis (posterior); Vas deferens (short); Ejaculatory duct (short); Urethra (common urogenital tract); <i>Accessory glands</i>:; seminal vesicle - fructose, large and yellow; coagulating gland - pink under seminal vesicle; prostate - around rectum; preputial gland - base of penis; <i>Gametogenesis</i>:; Seminiferous tubules - slide; Leydig cells - chol. -> testosterone, triangles b/w tubules; During development the spermatogonia/spermatocytes move inward; Spermatogonium (2n/2c) stem cell; Primary (2n/4c) and secondary (1n/2c) spermatocyte; Sertolli cell bridge - testosterone -> dHT; Spermatid (1n/c); Maturation in epididymis; ; <i>Female</i>:; Two-horned uterus (muscularized, implantation); Ovary - red = blood with bumps = follicles; Fallopian tube/oviduct - coiled white near ovary (fertilization); Usually lined with fat; <i>Gametogenesis</i>:; Estrous cycle - true ovum released; Meiotic divisions have unequal cytoplasm (polar body); Primary oogonia (2n/2c) stem cell; Primary (2n/4c) and secondary (1n/2c) oocyte in primary (1 layer) or growing (many layers) follicles; Mature follicle - true ovum and antrum (fluid-filled space); Theca - outermost, chol -> testosterone; Granulosa - inner, test -> estrogen; zona radiata - granulosa immediately around ovum; zona pellucida - clear, sperm receptors; Corpus luteum - mass of cells after ovulation (estrogen + progesterone)",
										"Embryo":"Placenta - bright red; Umbilical cord to embryo; Amniotic sac - clear around embryo"
									}
								},{
									id:"Human",
									data:{
										"Group type":"Example",
										"Circulation":"Systolic pressure: higher pressure, left ventricle, first tapping sound; Diastolic pressure: lower pressure, arteries",
										"Reproduction":"Females have menstrual cycle (shed endometrium); Ovulation of secondary oocyte; Second meiotic division triggered by fertilization; Fast block = depolarization of membrane; Slow block = cortical reaction, fusion of vesicles; MEROBLASTIC primitive streak development (like birds); Blastocyst (implant), not blastula; True indeterminate cleavage",
									}
								},{
									id:"Sheep",
									data:{
										"Group type":"Example",
										"Circulation":"Aorta (posterior to pulmonary artery); Gas and nutrient exhange in body; Superior/inferior vena cava; Right atrium; Tricuspid valve; Right ventricle (thin walls); Pulmonary semilunar valve; Pulmonary artery to lungs; Pulmonary vein; Left atrium; Bicuspid valve; Left ventricle (thick walls); Aortic semilunar valve; (Arteries will still be open while veins will be collapsed)",
									}
								}]
							}]
						}]
        				}]
        			},{
        				id: "Protostomes",
        				data : {
        					"Group type": "Superphylum",
        					"Unique traits": "Spiral embryonic cleavage; Determinate development; Blastopore -> mouth; Coelom from solid mesoderm tissue (schizocoelous)"
        				},
        				children: [{
        					id : "Ecdysozoans",
        					data: {
        						"Group type": "Superphylum",
        						"Unique traits": "Shed exoskeleton"
        					},
        					children: [{
        						id: "Nematoda",
        						data: {
        							"Group type": "Phylum",
        							"Common name": "Roundworms",
        							"Unique traits": "Pseudocoelomate"
        						}
        					},{
        						id: "Arthropoda",
        						data: {
        							"Group type": "Phylum",
        							"Unique traits": "Chitinous exoskeleton; Jointed appendages on segments; cephalization and group behavior; ventral nerve cord"
        						},
        						children: [{
        							id: "Trilobitomorpha",
        							data:{
        								"Group type" : "Class",
        								"Common name": "Trilobite",
        								"Unique traits":"EXTINCT!; three-lobed body; branched legs with gills"
        							}
        						},{
        							id:"Chelicerata",
        							data:{
        								"Group type":"Superclass",
        								"Unique traits":"Chelicerae -- specialized mouthparts; four pairs of legs; distinct cephalothorax + abdomen; no antennae"
        							},
        							children:[{
        								id:"Arachnida",
        								data:{
        									"Group type":"Class",
        									"Common name":"Spiders; scorpions; ticks; mites",
        									"Respiration":"Terrestrial spiders have book lungs.",
        									"Notes":"Eight legs but not horseshoe crabs; Distinguish ticks/mites from lice, fleas and other insects by leg #.; <a href='http://www.entomology.ucr.edu/ebeling/ebeling4.html'>A list of arachnid orders</a>"
        								}
        							},{
        								id: "Xiphosura",
        								data:{
        									"Group type":"Class",
        									"Common name":"Horseshoe crab",
        									"Notes":"Blue blood; hard exoskeleton with long tail"
        								}
        							}]
        						},{
        							id: "Mandibulata",
        							data:{
        								"Group Type":"Superclass",
        								"Unique traits":"Jaws for eating"
        							},
        							children:[{
        								id:"Myriapoda",
        								data:{
        									"Group type":"Superclass",
        									"Unique traits":"Many pairs of legs; Distinguish from segmented worms like Nereis by jointed legs"
        								},
        								children:[{
        									id:"Chilopoda",
        									data:{
        										"Group type":"Class",
        										"Common name":"Centipedes",
        										"Unique traits":"One pair of legs per body segment"
        									}
        								},{
        									id:"Diplopoda",
        									data:{
        										"Group type":"Class",
        										"Common name":"Millipedes",
        										"Unique traits":"Two pairs of legs per body segment"
        									}
        								}]
        							},{
        								id:"Pancrustacea",
        								data:{
        									"Group type":"Superclass",
        								},
        								children:[{
        									id:"Crustacea",
        									data:{
        										"Group type":"Class",
        										"Unique traits":"Two pairs of antennae (biramous); breathe with gills (ancestral - terrestrial species lost this); CaCO3 to exoskeleton"
        									},
        									children:[{
        										id:"Crayfish",
        										data:{
        											"Group type":"Example",
        											"Circulation":"Open; Heart - dorsal in thorax; Arteries; Tissue sinuses; Gill sinus; Pericardial sinus; Ostia (valves); Dissolved hemocyanin",
        											"Respiration":"Gills - connects to circ. system",
        											"Digestion":"Mouth; Mandibular muscle - pink/gingko leaf shaped; Stomach: Cardiac - gastric mill (cardiac ossicle/muscle), Pyloric; Digestive glands - yellow or brown; Intestine",
        											"Reproduction":"Dioecious; <i>Male</i>:; 1st/2nd pair of swimmerets rigid and medial; white 3-lobed testis near heart; coiled vas deferens; genital opening base of fourth walking leg; ; <i>Female</i>:; ovary with eggs; genital opening base of second walking leg",
        											"Excretion":"Green gland (opens at base of antenna) - green or cream; Gastrolith - blue/white, stores Ca",
												"Nervous":"Double ventral nerve cord with ganglia",
        										}
        									}]
        								},{
        									id:"Hexapoda",
        									data:{
        										"Group type":"Superclass",
        										"Unique traits":"Six legs; tracheal system for breathing"
        									},
        									children:[{
        										id: "Insecta",
        										data:{
        											"Group type":"Class",
        											"Unique traits":"Three distinct body segments (head, thorax, abdomen); 1 pair antennae",
        											"Hemimetabolous development":"Direct metamorphosis; young = nymph; young insect resembles adult; grasshoppers, cockroach",
        											"Holometabolous development":"Indirect metamorphosis; young = larva; young does not look like adult; pupal stage - bodily breakdown and redifferentiation into adult; imaginal discs - precursors to adult form in larva/pupa; adult - sexual maturity; mosquitoes, flies"
        										},
        										children:[{
        											id: "Drosophila",
        											data:{
        												"Group type":"Example",
        												"Common name":"Fruit fly",
        												"Stages":"Egg - blue; Larva - long, thin, brown; Pupa - round, dark brown, may have adult visible; Adult - a fly.",
        												"Notes":"Example of holometabolous development"
        											}
        										},{
        											id:"Periplaneta",
        											data:{
        												"Group type":"Example",
        												"Common name":"American Cockroach",
        												"Development":"Hemimetabolous",
        												"Circulation":"Open; Dorsal vessel; Hemolymph has amoebocytes but no pigment",
        												"Respiration":"Spiracles (lateral); Trachea (silver tubes along sides); Tracheoles",
        												"Skeleton/locomotion":"Muscles (esp. abdominal/thoracic); Attachment to exoskeleton",
        												"Digestion":"Mouth; Esophagus; Crop (storage; with white salivary glands); Gizzard (grinding, chitinized teeth); digestive caeca (clear white tubules below gizzard); Malphigian tubules - yellow spaghetti around mid-intestine; ileum, colon, rectum",
        												"Excretion":"Malphigian tubules; filter interstitial fluid from coelom; uric acid",
        												"Reproduction":"<i>External</i>:; Male = styles, round unsplit abdomen; Female = tapered split abdomen; <i>Internal</i>:; Males: conglobate gland, coiled vas deferens, packed accessory gland; Females: 2x ovaries (eight ovarioles each), dispersed accessory gland",
        												"Nervous system":"Double ventral nerve cord; Ganglia = packed nerves; Brain = dorsal, anterior",
        											}
        										}]
        									}]
        								}]
        							}]
        						}]
        					}]
        				},{
        					id: "Lophotrochozoans",
        					data: {
        						"Group type": "Superphylum",
        						"Unique traits": "Ring of cilia in larval stage (trochozoans only)",
        						"Notes": "Only studied trochozoans, not lophophorata"
        					},
        					children:[{
        						id: "Platyhelminthes",
        						data:{
        							"Group type": "Phylum",
        							"Common name": "Flatworms",
        							"Unique traits": "Acoelomate (derived, solid layer of parenchymal cells)",
        						},
        						children:[{
        							id: "Turbellaria",
        							data:{
        								"Group type":"Class",
        								"Unique traits":"Free-living"
        							},
        							children:[{
        								id: "Dugesia",
        								data:{
        									"Group type":"Example",
        									"Common name":"Planarian",
        									"Digestive":"Branched GVC with extendible pharynx",
        									"Skeleton/locomotion":"Longitudinal inside circular muscles on both pharynx and outer surface",
        									"Excretion":"Diffusion of NH3 from cells; osmoregulation by protonephridia: closed tubes w/flame bulb",
        									"Reproduction":"Asexual or sexual; mostly monecious",
        									"Nervous":"Nerve ladder; eyespots",
        									"Notes":"Slides anterior to pharynx have 1 GVC branch; Slides posterior to pharynx have 2 GVC branches"
        								}
        							}]
        						},{
        							id: "Trematoda",
        							data:{
        								"Group type":"Class",
        								"Common name":"Flukes",
        								"Notes":"Some scope examples"
        							}
        						},{
        							id: "Cestoda",
        							data:{
        								"Group type":"Class",
        								"Common name":"Tapeworms"
        							}
        						}]
        					},{
        						id: "Trochozoans",
        						children:[{
        							id: "Mollusca",
        							data: {
        								"Group type": "Phylum",
        								"Common names":"Bivalves; Octopi/squid; Snails/slugs; Chitons",
        								"Unique traits":"Mantle; muscular foot; radula (teeth); ctenidia (gas exchange + filter feeding); shell",
									"Circulation":"Dissolved hemocyanin, with lymphocytes present"
        							},
        							children:[{
        								id: "Bivalvia",
        								data:{
        									"Group type":"Class",
        									"Common names":"Clam, mussel, oyster, scallop",
        									"Unique traits":"2 symmetric valves with hinge; No radula; Mantle cavity" 
        								},
        								children:[{
        									id: "Clam",
        									data:{
        										"Group type":"Example",
        										"Digestion":"Excurrent (dorsal)/incurrent (ventral) siphons (posterior); mantle cavity; ctenidia (large, white flaps); labial palps (small, white, wormlike); digestive glands (absorption + breakdown)",
        										"Skeleton/locomotion":"Shell as attachment point; ant./post. adductors (scars); large muscular foot",
        										"Excretion":"(2) nephridia (visceral mass); NH3",
        										"Circulation/respiration":"Open; dissolved hemocyanin (some with Hb in RBC's); heart dorsal/posterior in visceral mass; gas exchange at ctenidia + sinuses",
        										"Nervous":"Not really.",
        										"Reproduction":"Dioecious; Larvae (similar to annelid)"
        									}
        								}]
        							},{
        								id: "Gastropoda",
        								data:{
        									"Group type":"Class",
        									"Common name":"Snails (with shells); Slugs (without)",
        									"Notes":"Distinguish sea slugs from sea cucumbers by sea cucumbers' spines."
        								}
        							},{
        								id: "Cephalopoda",
        								data:{
        									"Group type":"Class",
        									"Common name":"Octopi, squids, nautilus",
        									"Unique traits":"Foot in head region; closed circulatory system w/hemoglobin; no external shell except in Nautilus; giant nerve cells/cephalization; ink defense"
        								}
        							},{
        								id: "Polyplacophora",
        								data:{
        									"Group type":"Class",
        									"Common name":"Chitons",
        									"Unique traits":"8-plated shell",
        									"Notes":"Large orange example in a jar with no plates visible."
        								}
        							}]
        						},{
        							id: "Annelida",
        							data: {
        								"Group type": "Phylum",
        								"Common name":"Segmented roundworms",
        								"Unique traits":"High degree of metamerization",
        								"Cellular organization":"Coelom; Hydraulic skeleton; triploblast; complete digestive tract",
        								"Notes":"Larvae similar to molluscs"
        							},
        							children:[{
        								id: "Polychaetes",
        								data:{
        									"Group type":"Class",
        									"Common name":"Segmented bristleworms (marine)",
        									"Notes":"Tubeworms in tank -- distinguish from feather dusters by worm part; "
        								},
        								children:[{
        									id:"Nereis",
        									data:{
        										"Group type":"Example",
        										"Notes":"Similar in appearance to myriapods; look for jointed appendages"
        									}
        								}]
        							},{
        								id: "Oligochaetes",
        								data:{
        									"Group type":"Class",
        									"Common name":"Earthworms (terrestrial)"
        								},
        								children:[{
        									id: "Lumbricus",
        									data:{
        										"Group type":"Example",
        										"Common name":"Earthworm",
        										"Digestion":"GI tract; Pharynx (with muscles); esophagus (4 calciferous glands, orange); crop (thin-walled, storage); gizzard (thick-walled, grinding); intestine (typhlosole - surface area, chloragogenous tissue - yellow, like liver)",
        										"Circulation":"Closed; Dorsal blood vessel + anterior ring pseudohearts for pumping; dissolved hemoglobin - no RBC",
        										"Excretory":"Metanephridia spanning multiple somites; coiled silver tubes along body wall; anterior ciliated funnel to coelom; blood vessels; squash",
        										"Reproduction":"Monecious; Seminal vesicles (on esophagus, 3 pairs, yellow, incl. testes, store own sperm); --squash: developing sperm + nematodes; Spermatheca (white, store other's sperm); internal fertilization",
        										"Nervous":"Brain = suprapharyngeal ganglia (2, dorsal); ventral nerve cord with ganglia",
        										"Microscopy":"Cuticle; epidermis; circular muscles (outer); longitudinal muscles (inner); typhlosole prominent with chlor. tissue; peritoneum + coelom",
        										"Notes":"Dorsal blood vessel; 4 pairs of setae per segment; Clitellum"
        									}
        								},{
        									id:"Tubifex",
        									data:{
        										"Group type":"Example",
        										"Notes":"If alive, will wave tail around in water to respire."
        									}
        								}]
        							},{
        								id: "Hirudinea",
        								data:{
        									"Group type":"Class",
        									"Common name":"Leeches",
        									"Unique traits":"Anticoagulant (hirudin)"
        								}
        							}]
        						}]
        					}]
        				}]
        			}]
        		}]
        	}]
    };