import { Logo } from '@/components/Logo/Logo';
import MotionBox from '@/components/motion/MotionBox';

export function AnimatedLogo() {
  return (
    <MotionBox animate={{ y: 10 }} transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}>
      <Logo boxSize="40" />
    </MotionBox>
  );
}
