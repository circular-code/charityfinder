//https://en.wikipedia.org/wiki/List_of_charitable_foundations
//https://www.dzi.de/spenderberatung/das-spenden-siegel/liste-aller-spenden-siegel-organisationen-a-z/
//https://www.netzwerk-ebd.de/member-category/gemeinnuetzige-organisationen/?set-view-type=fulllist
//https://edelmut.org/organisationen/
//file:///C:/Users/steph/Downloads/gemeinnuetzige_organisationen.pdf als excel/json anfragen?
//https://www.unitedcharity.de/Hilfsorganisationen/Organisationen

var data = [{"region":"Germany","name":"action medeor - Deutsches Medikamenten-Hilfswerk e. V.","categories":["Armut","Gesundheitswesen","Krankheitswesen","EntwicklungZusammenarbeit3Welt","Soziales"],"link":"www.medeor.de"},{"region":"Germany","name":"AGAPEDIA Stiftung für Kinder, Soziales und Bildung gGmbH","categories":["Armut","Gesundheitswesen","EntwicklungZusammenarbeit3Welt","Familie","Jugend","Kinder","Soziales"],"link":"www.agapedia.de"},{"region":"Germany","name":"Aktion Kulturland Gemeinnützige Stiftung für Landwirtschaft und Ökologie","categories":["KulturBildung","NaturUmwelt","Soziales","Tiere"],"link":"www.aktion-kulturland.de"},{"region":"Germany","name":"Aktion Sonnenschein - Hilfe für das mehrfach behinderte Kind","categories":["Behindertenwesen","Jugend","Kinder","KulturBildung"],"link":"www.aktionsonnenschein.com"},{"region":"Germany","name":"Albert-Schweitzer-Kinderdorf Hessen e.V.","categories":["Familie","Jugend","Kinder","Soziales"],"link":"www.ask-hessen.de"},{"region":"Germany","name":"Albert-Schweitzer-Kinderdörfer und Familienwerke e.V. Bundesverband","categories":["Alter","Familie","Jugend","Kinder","Soziales"],"link":"www.albert-schweitzer-verband.de"},{"region":"Germany","name":"Alzheimer Forschung Initiative e.V.","categories":["Alter","Gesundheitswesen","Krankheitswesen","ForschungTechnik"],"link":"www.alzheimer-forschung.de"},{"region":"Germany","name":"Amnesty International Deutschland e.V.","categories":["EntwicklungZusammenarbeit3Welt","Familie","Kinder","KulturBildung","Soziales"],"link":"www.amnesty.de/testament"},{"region":"Germany","name":"AMSEL, Aktion Multiple Sklerose Erkrankter Landesverband der DMSG in Baden-Württemberg e.V.","categories":["Behindertenwesen","Gesundheitswesen","Krankheitswesen","Familie","Soziales"],"link":"www.amsel.de"},{"region":"Germany","name":"ANDHERI HILFE e.V.","categories":["Armut","EntwicklungZusammenarbeit3Welt","Kinder","NaturUmwelt","Soziales"],"link":"www.andheri-hilfe.org"},{"region":"Germany","name":"Animals' Angels e.V.","categories":["Tiere"],"link":"www.animals-angels.de"},{"region":"Germany","name":"Ärzte ohne Grenzen e.V.","categories":["Armut","Gesundheitswesen","Krankheitswesen","EntwicklungZusammenarbeit3Welt","Kinder"],"link":"www.aerzte-ohne-grenzen.de"},{"region":"Germany","name":"AtemWeg - Stiftung zur Erforschung von Lungenkrankheiten","categories":["Gesundheitswesen","Krankheitswesen","ForschungTechnik"],"link":"www.atemweg-stiftung.de"},{"region":"Germany","name":"Augustinum Stiftung","categories":["Alter","Behindertenwesen","Gesundheitswesen","Kinder","KulturBildung"],"link":"www.moeglichmacherwerden.de"},{"region":"Germany","name":"Bärenherz Stiftung","categories":["Krankheitswesen","Familie","Jugend","Kinder"],"link":"www.baerenherz.de"},{"region":"Germany","name":"Berner Sennenhunde in Not e.V.","categories":["NaturUmwelt","Tiere"],"link":"www.berner-sennenhunde-in-not.de"},{"region":"Germany","name":"Bethanien Kinder- und Jugenddorf Bergisch Gladbach","categories":["Armut","Familie","Jugend","Kinder","Soziales"],"link":"www.bethanien-kinderdoerfer.de"},{"region":"Germany","name":"Bethanien Kinder- und Jugenddorf Eltville","categories":["Armut","Familie","Jugend","Kinder","Soziales"],"link":"www.bethanien-kinderdoerfer.de"},{"region":"Germany","name":"Bethanien Kinderdörfer gGmbH","categories":["Armut","Familie","Jugend","Kinder","Soziales"],"link":"www.bethanien-kinderdoerfer.de"},{"region":"Germany","name":"Björn Schulz Stiftung","categories":["Gesundheitswesen","Krankheitswesen","Familie","Kinder","Soziales"],"link":"www.bjoern-schulz-stiftung.de"},{"region":"Germany","name":"Bund für Umwelt und Naturschutz Deutschland -BUND-, Landesverband Baden-Württemberg e.V.","categories":["NaturUmwelt"],"link":"www.bund-bawue.de"},{"region":"Germany","name":"Bundesverband Selbsthilfe Körperbehinderter e.V.","categories":["Behindertenwesen","Gesundheitswesen","Soziales"],"link":"www.bsk-ev.org"},{"region":"Germany","name":"Bundesvereinigung Lebenshilfe e.V.","categories":["Behindertenwesen","Familie","Kinder","Soziales"],"link":"www.lebenshilfe.de"},{"region":"Germany","name":"Cap Anamur/Deutsche Not-Ärzte e.V.","categories":["Gesundheitswesen","EntwicklungZusammenarbeit3Welt","Kinder","KulturBildung","Soziales"],"link":"www.cap-anamur.org"},{"region":"Germany","name":"Caritas-Gemeinschaftsstiftung für das Bistum Aachen","categories":["Alter","Armut","Familie","Kinder","Soziales"],"link":"www.caritasstiftung-aachen.de"},{"region":"Germany","name":"Claudia Lucas Stiftung","categories":["Gesundheitswesen","Krankheitswesen","Familie","Kinder","KulturBildung"],"link":"www.claudia-lucas-stiftung.de"},{"region":"Germany","name":"Conpart e.V.","categories":["Behindertenwesen","Gesundheitswesen","Kinder","Soziales"],"link":"www.conpart-bremen.de"},{"region":"Germany","name":"CVJM-Gesamtverband in Deutschland e. V.","categories":["EntwicklungZusammenarbeit3Welt","Jugend","Kinder","KirchenReligion","Soziales"],"link":"www.cvjm.de"},{"region":"Germany","name":"Deutsche AIDS-Stiftung","categories":["Armut","Gesundheitswesen","Krankheitswesen","EntwicklungZusammenarbeit3Welt","Familie"],"link":"www.aids-stiftung.de"},{"region":"Germany","name":"Deutsche Alzheimer Gesellschaft e. V. Selbsthilfe Demenz","categories":["Alter","Behindertenwesen","Gesundheitswesen","Krankheitswesen","Soziales"],"link":"www.deutsche-alzheimer.de"},{"region":"Germany","name":"Deutsche Arthrose-Hilfe e.V.","categories":["Gesundheitswesen","Krankheitswesen"],"link":"www.arthrose.de"},{"region":"Germany","name":"Deutsche Demenzhilfe - DZNE-Stiftung für Forschung und Innovation","categories":["Gesundheitswesen","Krankheitswesen","ForschungTechnik"],"link":"www.deutsche-demenzhilfe.com"},{"region":"Germany","name":"Deutsche Gesellschaft zur Rettung Schiffbrüchiger","categories":["Gesundheitswesen","ForschungTechnik","NaturUmwelt","SportFreizeit"],"link":"www.seenotretter.de"},{"region":"Germany","name":"Deutsche Hirntumorhilfe e.V.","categories":["Gesundheitswesen","Krankheitswesen","Familie","ForschungTechnik"],"link":"www.hirntumorhilfe.de"},{"region":"Germany","name":"Deutsche KinderKrebshilfe der Deutschen Krebshilfe (Stiftung)","categories":["Gesundheitswesen","Krankheitswesen","Familie","Jugend","Kinder","ForschungTechnik"],"link":"www.kinderkrebshilfe.de"},{"region":"Germany","name":"Deutsche Krebshilfe (Stiftung )","categories":["Gesundheitswesen","Krankheitswesen","Familie","ForschungTechnik"],"link":"www.krebshilfe.de"},{"region":"Germany","name":"Deutsche Rheuma-Liga Bundesverband e.V.","categories":["Behindertenwesen","Gesundheitswesen","Jugend","ForschungTechnik","Soziales"],"link":"www.rheuma-liga.de"},{"region":"Germany","name":"Deutsche Stiftung für Demenzerkrankte - Wilhelm von Lauff-Stiftung","categories":["Alter","Familie","Gesundheitswesen","Krankheitswesen","Soziales"],"link":"www.demenzstiftung.de"},{"region":"Germany","name":"Deutscher Kinderhospizverein e.V.","categories":["Behindertenwesen","Gesundheitswesen","Familie","Kinder","Soziales"],"link":"www.deutscher-kinderhospizverein.de"},{"region":"Germany","name":"Deutscher Kinderschutzbund Kreisverband Ahrweiler e.V.","categories":["Familie","Jugend","Kinder","KulturBildung","Soziales"],"link":"www.kinderschutzbund-ahrweiler.de"},{"region":"Germany","name":"Deutscher Tierschutzbund e. V.","categories":["ForschungTechnik","NaturUmwelt","Tiere"],"link":"www.tierschutzbund.de"},{"region":"Germany","name":"Deutsches Katholisches Blindenwerk e.V.","categories":["Behindertenwesen","Gesundheitswesen","Jugend","Kinder","KirchenReligion"],"link":"www.blindenwerk.de"},{"region":"Germany","name":"DRF Luftrettung - DRF e.V.","categories":["Gesundheitswesen","Krankheitswesen","Soziales"],"link":"drf-luftrettung.de"},{"region":"Germany","name":"Elterninitiative für krebskranke Kinder Jena e.V.","categories":["Gesundheitswesen","Krankheitswesen","Familie","Kinder","Soziales"],"link":"www.ekk-jena.de"},{"region":"Germany","name":"Evangelische Erziehungsstiftung Gefrees","categories":["Jugend","Kinder","KirchenReligion","KulturBildung"],"link":"www.jesgefrees.de"},{"region":"Germany","name":"Evangelische Stiftung Alsterdorf","categories":["AlkoholDrogen","Behindertenwesen","Gesundheitswesen","Krankheitswesen","Familie","Jugend","Kinder","KulturBildung","Soziales","SportFreizeit"],"link":"www.alsterdorf.de"},{"region":"Germany","name":"Evangelische Stiftung Lichtenstern","categories":["Behindertenwesen","Familie","Jugend","Kinder","Soziales"],"link":"www.lichtenstern.de"},{"region":"Germany","name":"Evangelische Stiftung Volmarstein","categories":["Alter","Behindertenwesen","Gesundheitswesen","Krankheitswesen","ForschungTechnik","KirchenReligion"],"link":"www.volmarstein.info"},{"region":"Germany","name":"Evangelisches Johannesstift SbR","categories":["Behindertenwesen","Gesundheitswesen","Jugend","Kinder","Soziales"],"link":"www.evangelisches-johannesstift.de"},{"region":"Germany","name":"Fördergemeinschaft Deutsche Kinderherzzentren e.V.","categories":["Gesundheitswesen","Familie","Kinder","ForschungTechnik","Soziales"],"link":"www.kinderherzen.de"},{"region":"Germany","name":"Forschungsinstitut Kinderkrebs-Zentrum Hamburg","categories":["Gesundheitswesen","Krankheitswesen","Jugend","Kinder","ForschungTechnik"],"link":"www.kinderkrebs-forschung.de"},{"region":"Germany","name":"Frauen helfen Frauen e.V.","categories":["Armut","Familie","Jugend","Kinder","Soziales"],"link":"www.fhf-stuttgart.de"},{"region":"Germany","name":"Freunde alter Menschen e.V.","categories":["Alter","Gesundheitswesen","Soziales"],"link":"www.famev.de"},{"region":"Germany","name":"Gebrüder-Gründler-Stiftung","categories":["AlkoholDrogen","Alter","Gesundheitswesen","Krankheitswesen","Kinder"],"link":"www.gruendler-stiftung.org"},{"region":"Germany","name":"Gemeinschaftszentrum Sönke-Nissen-Park Stiftung","categories":["Alter","Armut","Familie","Jugend","KulturBildung"],"link":"www.gutshaus-glinde.de"},{"region":"Germany","name":"Global Nature Fund (GNF)","categories":["EntwicklungZusammenarbeit3Welt","NaturUmwelt","Tiere"],"link":"www.globalnature.org"},{"region":"Germany","name":"Goethe-Universität Frankfurt am Main","categories":["Gesundheitswesen","Krankheitswesen","Jugend","ForschungTechnik","KulturBildung"],"link":"http://www.uni-frankfurt.de"},{"region":"Germany","name":"Habitat für Humanity Deutschland e.V.","categories":["EntwicklungZusammenarbeit3Welt"],"link":"www.habitatforhumanity.de"},{"region":"Germany","name":"Hans-Rosenthal-Stiftung - schnelle Hilfe in akuter Not - e.V.","categories":["Alter","Armut","Familie","Kinder","Soziales"],"link":"www.hans-rosenthal-stiftung.de"},{"region":"Germany","name":"Helping Hands e.V.  Wirkungsvoll helfen · Nachhaltig verändern","categories":["Armut","EntwicklungZusammenarbeit3Welt","Familie","Kinder","Soziales"],"link":"www.helpinghandsev.org"},{"region":"Germany","name":"Hinz&amp;Kunzt","categories":["AlkoholDrogen","Alter","Armut","Arbeitslosigkeit","Soziales"],"link":"www.hinzundkunzt.de"},{"region":"Germany","name":"humedica e.V.","categories":["Armut","Gesundheitswesen","EntwicklungZusammenarbeit3Welt","Familie","Kinder"],"link":"www.humedica.org"},{"region":"Germany","name":"INTACT Mädchenhilfe, Internationale Aktion gegen die Beschneidung von Mädchen und Frauen e.V.","categories":["Gesundheitswesen","EntwicklungZusammenarbeit3Welt","Kinder","KulturBildung","Soziales"],"link":"www.intact-ev.de"},{"region":"Germany","name":"Internationale Christliche Botschaft Jerusalem - Deutscher Zweig e. V. (kurz: ICEJ e. V.)","categories":["Armut","EntwicklungZusammenarbeit3Welt","Jugend","KirchenReligion","KulturBildung","Soziales"],"link":"www.icej.de"},{"region":"Germany","name":"IRIS-STIFTUNG","categories":["Behindertenwesen","Familie","Jugend","Kinder","Soziales"],"link":"www.iris-stiftung.de"},{"region":"Germany","name":"J. Wilh. Tenten Stiftung","categories":["Alter","Armut","Behindertenwesen","Soziales"],"link":"www.tenten-stiftung.de"},{"region":"Germany","name":"KARO e.V.","categories":["Armut","Familie","Jugend","Kinder","Soziales"],"link":"www.karo-ev.de"},{"region":"Germany","name":"Katholische Jugendfürsorge der Erzdiözese München und Freising e.V.","categories":["Behindertenwesen","Gesundheitswesen","Jugend","Kinder","Soziales"],"link":"www.kjf-muenchen.de"},{"region":"Germany","name":"Kinder von Tschernobyl - Stiftung des Landes Niedersachsen","categories":["Gesundheitswesen","Kinder"],"link":"www.tschernobyl.niedersachsen.de"},{"region":"Germany","name":"Kinder- und Jugendhospizstiftung Balthasar","categories":["Behindertenwesen","Krankheitswesen","Familie","Jugend","Kinder"],"link":"www.balthasarstiftung.de"},{"region":"Germany","name":"Kinderheim Kleine Strolche e.V. - Hilfe für traumatisierte Kinder","categories":["Jugend","Kinder","Soziales"],"link":"www.kinderheim-kleine-strolche.de"},{"region":"Germany","name":"kinderherzen - Fördergemeinschaft Deutsche Kinderherzzentren e.V.","categories":["Gesundheitswesen","Familie","Kinder","ForschungTechnik","Soziales"],"link":"www.kinderherzen.de"},{"region":"Germany","name":"KINDERHILFE - Hilfe für krebs- und schwerkranke Kinder e.V.","categories":["Gesundheitswesen","Krankheitswesen","Familie","Jugend","Kinder","Soziales"],"link":"www.kinderhilfe-ev.de"},{"region":"Germany","name":"Kinderrechte Afrika e.V. - Zukunft für Kinder in Not","categories":["Armut","EntwicklungZusammenarbeit3Welt","Familie","Jugend","Kinder"],"link":"www.kinderrechte-afrika.org"},{"region":"Germany","name":"Kinderschutzbund Aachen e.V.","categories":["Armut","Familie","Jugend","Kinder","Soziales"],"link":"www.kinderschutzbund-aachen.de"},{"region":"Germany","name":"Konrad-Adenauer-Stiftung e.V.","categories":["EntwicklungZusammenarbeit3Welt","ForschungTechnik","KulturBildung"],"link":"kas.de"},{"region":"Germany","name":"Krebsverband Baden-Württemberg e. V.","categories":["Gesundheitswesen","Krankheitswesen","Soziales"],"link":"www.krebsverband-bw.de"},{"region":"Germany","name":"Kurt-Hahn-Stiftung c/o Deutsches Stiftungszentrum GmbH","categories":["Jugend","Kinder","KulturBildung","Soziales"],"link":"www.kurt-hahn-stiftung.de"},{"region":"Germany","name":"Lebenszentrum Königsborn für Menschen mit Behinderungen","categories":["Behindertenwesen","Gesundheitswesen","Jugend","Kinder"],"link":"www.lebenszentrum-koenigsborn.de"},{"region":"Germany","name":"Leonhard gemeinnützige GmbH | Unternehmertum für Gefangene","categories":["AlkoholDrogen","Armut","Arbeitslosigkeit","KulturBildung","Soziales"],"link":"www.leonhard.eu"},{"region":"Germany","name":"Lichtbrücke e. V.","categories":["EntwicklungZusammenarbeit3Welt","Soziales"],"link":"www.lichtbruecke.com"},{"region":"Germany","name":"MainLichtblick e. V.","categories":["Behindertenwesen","Gesundheitswesen","Krankheitswesen","Familie","Jugend","Kinder","Soziales"],"link":"www.mainlichtblick.de"},{"region":"Germany","name":"Maria im Tann, Zentrum für Kinder-, Jugend- u. Familienhilfe","categories":["Familie","Jugend","Kinder"],"link":"www.mariaimtann.de"},{"region":"Germany","name":"Medica mondiale e. V.","categories":["Gesundheitswesen","EntwicklungZusammenarbeit3Welt","Jugend","Soziales"],"link":"www.medicamondiale.org"},{"region":"Germany","name":"Mercy Ships Deutschland e.V.","categories":["Armut","Gesundheitswesen","Krankheitswesen","EntwicklungZusammenarbeit3Welt","Kinder","Soziales"],"link":"www.mercyships.de"},{"region":"Germany","name":"missio-Internationales Katholisches Missionswerk e.V.","categories":["Armut","EntwicklungZusammenarbeit3Welt","Familie","Kinder","KirchenReligion"],"link":"www.missio-hilft.de"},{"region":"Germany","name":"Mütter- und FamilienZentrum Ingelheim e.V. ( MütZe e.V.)","categories":["Familie","Jugend","Kinder","KulturBildung","Soziales"],"link":"www.muetze-ingelheim.de"},{"region":"Germany","name":"NABU Naturschutzbund e.V. Bundesgeschäftsstelle","categories":["NaturUmwelt","Tiere"],"link":"www.NABU.de"},{"region":"Germany","name":"Niedersächsische Krebsgesellschaft e.V.","categories":["Behindertenwesen","Gesundheitswesen","Krankheitswesen","ForschungTechnik","Soziales"],"link":"www.nds-krebsgesellschaft.de"},{"region":"Germany","name":"Niedersächsische Krebsstiftung","categories":["Gesundheitswesen","Krankheitswesen","ForschungTechnik"],"link":"www.nds-krebsstiftung.de"},{"region":"Germany","name":"Nikolauspflege - Stiftung für blinde und sehbehinderte Menschen","categories":["Behindertenwesen","Jugend","Kinder","Soziales"],"link":"www.nikolauspflege.de"},{"region":"Germany","name":"PRO RETINA Deutschland e.V.","categories":["Alter","Behindertenwesen","Gesundheitswesen","Krankheitswesen","Kinder","ForschungTechnik"],"link":"www.pro-retina.de"},{"region":"Germany","name":"Rittergut Kleine Strolche gGmbH - Therapiezentrum für traumatisierte Kinder","categories":["Jugend","Kinder","Soziales"],"link":"www.kinderheim-kleine-strolche.de"},{"region":"Germany","name":"ROTE NASEN Deutschland e.V.","categories":["Alter","Gesundheitswesen","Jugend","Kinder","KulturBildung","Soziales"],"link":"www.rotenasen.de"},{"region":"Germany","name":"Rummelsberger Diakonie e.V.","categories":["Alter","Familie","Kinder","KirchenReligion","Soziales"],"link":"www.rummelsberger-diakonie.de"},{"region":"Germany","name":"Sächsische Krebsgesellschaft e.V.","categories":["Gesundheitswesen","Krankheitswesen","Soziales"],"link":"www.skg-ev.de"},{"region":"Germany","name":"SAVE Wildlife Conservation Fund - Stiftung","categories":["EntwicklungZusammenarbeit3Welt","KulturBildung","NaturUmwelt","Soziales","Tiere"],"link":"www.save-wildlife.org"},{"region":"Germany","name":"SOS-Kinderdorf-Stiftung","categories":["Behindertenwesen","Familie","Jugend","Kinder","Soziales"],"link":"www.sos-kinderdorf-stiftung.de"},{"region":"Germany","name":"SOS-Kinderdörfer weltweit","categories":["Armut","EntwicklungZusammenarbeit3Welt","Familie","Kinder","Soziales"],"link":"www.sos-kinderdoerfer.de"},{"region":"Germany","name":"SoVD Sozialverband Deutschland, Landesverband NRW","categories":["Alter","Arbeitslosigkeit","Behindertenwesen","Familie","Soziales"],"link":"www.sovd-nrw.de"}];
