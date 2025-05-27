export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
}

export interface NumberAnimationConfig extends AnimationConfig {
  onComplete?: () => void;
  onUpdate?: (progress: number) => void;
}

export interface CircleAnimationConfig extends AnimationConfig {
  radius?: number;
  center?: { x: number; y: number };
}

export interface SliderAnimationConfig extends AnimationConfig {
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
}
