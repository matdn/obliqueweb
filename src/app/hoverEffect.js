

import * as THREE from "three";
import gsap from "gsap";

export default class HoverEffect {
    constructor(options) {
        const { parent, image1, image2, displacementImage, intensity = 1 } = options;

        this.parent = parent;
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(
            parent.offsetWidth / -2,
            parent.offsetWidth / 2,
            parent.offsetHeight / 2,
            parent.offsetHeight / -2,
            1,
            1000
        );

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(parent.offsetWidth, parent.offsetHeight);
        parent.appendChild(this.renderer.domElement);

        this.uniforms = {
            uProgress: { value: 0 },
            texture1: { value: new THREE.TextureLoader().load(image1) },
            texture2: { value: new THREE.TextureLoader().load(image2) },
            displacement: { value: new THREE.TextureLoader().load(displacementImage) },
        };

        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                uniform float uProgress;
                uniform sampler2D disp;
                uniform sampler2D texture1;
                uniform sampler2D texture2;
                uniform float angle1;
                uniform float angle2;
                uniform float intensity1;
                uniform float intensity2;
        
                mat2 getRotM(float angle) {
                    float s = sin(angle);
                    float c = cos(angle);
                    return mat2(c, -s, s, c);
                }
        
                void main() {
                    vec4 disp = texture2D(disp, vUv);
                    vec2 dispVec = vec2(disp.r, disp.g);
        
                    vec2 distortedPosition1 = vUv + getRotM(angle1) * dispVec * intensity1 * uProgress;
                    vec2 distortedPosition2 = vUv + getRotM(angle2) * dispVec * intensity2 * (1.0 - uProgress);
        
                    vec4 _texture1 = texture2D(texture1, distortedPosition1);
                    vec4 _texture2 = texture2D(texture2, distortedPosition2);
        
                    gl_FragColor = mix(_texture1, _texture2, uProgress); // Utilisation de uProgress
                }
            `,
            transparent: true
        });


        this.geometry = new THREE.PlaneGeometry(parent.offsetWidth, parent.offsetHeight);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);

        this.render = this.render.bind(this);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    updateProgress(progress) {
        this.uniforms.uProgress.value = progress;
        this.render();
    }
}
