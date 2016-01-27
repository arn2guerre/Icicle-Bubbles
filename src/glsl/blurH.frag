uniform sampler2D tDiffuse;
uniform float uOffset;
uniform float uEdgeFix;
uniform vec2 uResolution;
varying vec2 vUv;

void main() {

    vec4 sum = vec4( 0.0 );

    vec4 center = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );

    sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * uOffset, vUv.y ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * uOffset, vUv.y ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * uOffset, vUv.y ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * uOffset, vUv.y ) ) * 0.1531;
    sum += center * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * uOffset, vUv.y ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * uOffset, vUv.y ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * uOffset, vUv.y ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * uOffset, vUv.y ) ) * 0.051;

    center.xy = sum.xy;
    center.z = mix(sum.z, center.z, 1.0 - 0.01 * uEdgeFix);

    gl_FragColor = center;

}
