import { useEffect, useRef } from "react";
import { robot } from "../assets";

const HeroScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactViewport = window.matchMedia("(max-width: 639px)").matches;

    if (!mount || reduceMotion || compactViewport) return undefined;

    let disposed = false;
    let cleanup = () => {};

    const initialize = async () => {
    const THREE = await import("three");
    if (disposed) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const cards = new THREE.Group();
    scene.add(cards);

    const light = new THREE.PointLight(0x6ee7f2, 4, 12);
    light.position.set(-3, 3, 4);
    scene.add(light);
    const violetLight = new THREE.PointLight(0xd28cff, 3, 10);
    violetLight.position.set(3, -2, 3);
    scene.add(violetLight);
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));

    const createCard = ({ color, accent, position, rotation, speed }) => {
      const card = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(2.35, 1.4, 0.08),
        new THREE.MeshPhysicalMaterial({
          color,
          metalness: 0.55,
          roughness: 0.22,
          transparent: true,
          opacity: 0.9,
          clearcoat: 1,
          clearcoatRoughness: 0.15,
        }),
      );
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(body.geometry),
        new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.95 }),
      );
      const stripe = new THREE.Mesh(
        new THREE.PlaneGeometry(2.22, 0.13),
        new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.58 }),
      );
      stripe.position.set(0, 0.34, 0.046);

      const chip = new THREE.Mesh(
        new THREE.BoxGeometry(0.34, 0.26, 0.025),
        new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9, roughness: 0.25 }),
      );
      chip.position.set(-0.66, -0.15, 0.06);

      const mark = new THREE.Mesh(
        new THREE.TorusGeometry(0.16, 0.018, 12, 32),
        new THREE.MeshBasicMaterial({ color: accent }),
      );
      mark.position.set(0.72, -0.14, 0.06);

      card.add(body, edges, stripe, chip, mark);
      card.position.set(...position);
      card.rotation.set(...rotation);
      card.userData = { speed, baseY: position[1], baseRotation: rotation };
      cards.add(card);
    };

    createCard({
      color: 0x384b73,
      accent: 0x6ee7f2,
      position: [-0.45, 0.95, -0.2],
      rotation: [-0.2, 0.18, -0.28],
      speed: 0.55,
    });
    createCard({
      color: 0x4b3b72,
      accent: 0xd28cff,
      position: [0.68, 0.15, -0.65],
      rotation: [0.18, -0.22, 0.2],
      speed: 0.42,
    });
    createCard({
      color: 0x24485c,
      accent: 0x83f7df,
      position: [-0.52, -0.65, -1.05],
      rotation: [-0.12, 0.24, -0.12],
      speed: 0.34,
    });

    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    mount.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    const clock = new THREE.Clock();
    let frameId;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      cards.rotation.x += (pointerY * 0.08 - cards.rotation.x) * 0.035;
      cards.rotation.y += (pointerX * 0.14 - cards.rotation.y) * 0.035;
      cards.children.forEach((card, index) => {
        const { speed, baseY, baseRotation } = card.userData;
        card.position.y = baseY + Math.sin(elapsed * speed + index) * 0.08;
        card.rotation.z = baseRotation[2] + Math.sin(elapsed * speed + index) * 0.055;
        card.rotation.y = baseRotation[1] + elapsed * 0.045 * speed;
      });
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    cleanup = () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
    };

    initialize();
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className="hero-scene" aria-label="Ilustración tecnológica animada">
      <div ref={mountRef} className="hero-scene__canvas" aria-hidden="true" />
      <img src={robot} alt="Mano robótica sosteniendo tarjetas holográficas" className="hero-scene__hand" />
    </div>
  );
};

export default HeroScene;
