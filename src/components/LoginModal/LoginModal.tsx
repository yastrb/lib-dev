import React from 'react';
import cn from 'classnames';
import s from './LoginModal.module.scss';

interface Props {
  className?: string;
}

/**
 *  LoginModal
 *  @param className
 */

export default function LoginModal({ className = '' }: Props) {
  return (
    <div className={cn(s.LoginModal, className)}> 
    </div>
  );
}