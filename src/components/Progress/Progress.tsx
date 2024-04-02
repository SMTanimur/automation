'use client';


import { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import { ProgressProps } from '.';
import { ProgressComponent, ProgressSize } from './Progress.types';
import { usePropId } from '~/utils/usePropId';
import { progressStyles } from './Progress.styles';
const defaultProps: Partial<ProgressProps> = {
  animated: false,
  color: 'dark',
  radius: 'md',
  shadow: 'none',
  showValue: false,
  size: 'md',
  striped: false,
};

const Progress: ProgressComponent = forwardRef<HTMLDivElement, ProgressProps>(
  (props: ProgressProps, ref?: ForwardedRef<HTMLDivElement>) => {
 
    const id = usePropId(props.id);
    const labelId = `${id}-label`;
    const {
      animated,
      children,
      className = '',
      color,
      description,
      label = '',
      radius,
      shadow,
      showValue,
      size,
      striped,
      value = 0,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const progressBarRef = useRef<HTMLDivElement>(null);
    const outerValueSizes: Partial<ProgressSize>[] = ['xs', 'sm'];

    useEffect(() => {
      if (!animated) {
        return;
      }

      if (!striped) {
        return;
      }

      if (!progressBarRef?.current) {
        return;
      }

      const animation = progressBarRef.current.animate(
        {
          backgroundPosition: ['0 0', progressStyles.stripe({ size })],
        },
        {
          duration: 2000,
          iterations: Infinity,
        }
      );

      return () => {
        animation.cancel();
      };
    }, [animated, striped, progressBarRef, size, progressStyles]);

    useEffect(() => {
      if (!progressBarRef?.current) {
        return;
      }

      if (!striped) {
        progressBarRef.current.style.backgroundSize = '';
        progressBarRef.current.style.backgroundImage = '';
        return;
      }

      progressBarRef.current.style.backgroundSize = progressStyles.stripe({ size });
      progressBarRef.current.style.backgroundImage = `linear-gradient(-45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)`;
    }, [progressBarRef, size, striped, progressStyles]);

    const valuePosition: 'outer' | 'inner' =
      size && outerValueSizes.includes(size) ? 'outer' : 'inner';

    return (
      <div id={id} ref={ref} className={progressStyles.wrapper({ className, size })} {...additionalProps}>
        {(label || (showValue && valuePosition === 'outer')) && (
          <div className={progressStyles.label({ size })}>
            {label && (
              <span id={labelId} role="presentation">
                {label}
              </span>
            )}
            {showValue && valuePosition === 'outer' && <span>{value}%</span>}
          </div>
        )}

        <div className={progressStyles.base({ radius, size, shadow })}>
          <div
            ref={progressBarRef}
            role="progressbar"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={value}
            aria-labelledby={label ? labelId : undefined}
            style={{
              width: `${value}%`,
            }}
            className={progressStyles.bar({ color })}
          >
            {showValue && valuePosition === 'inner' && <span>{value}%</span>}
          </div>
        </div>

        {description && <span className={progressStyles.description({ size })}>{description}</span>}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
