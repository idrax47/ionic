import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('URL_DE_TU_BASE_DE_DATOS', 'TU_API_KEY');
  }

  // Agrega métodos para interactuar con Supabase según las operaciones necesarias (insertar, actualizar, eliminar, etc.)
}
