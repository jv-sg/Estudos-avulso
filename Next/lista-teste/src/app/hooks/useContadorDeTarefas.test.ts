import { renderHook, act } from '@testing-library/react';
import { useContadorDeTarefas } from '@/app/hooks/useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
  it('deve iniciar com o valor correto', () => {
    const { result } = renderHook(() => useContadorDeTarefas(5));
    expect(result.current.total).toBe(5);
  });

  it('deve incrementar o contador', () => {
    const { result } = renderHook(() => useContadorDeTarefas(0));
    act(() => {
      result.current.incrementar();
    });
    expect(result.current.total).toBe(1);
  });
});